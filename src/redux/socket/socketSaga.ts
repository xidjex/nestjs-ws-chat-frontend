import { eventChannel, EventChannel } from 'redux-saga';
import {
	all,
	call,
	fork,
	put,
	take,
	takeLatest,
} from 'redux-saga/effects';

// Ws Connection
import WebsocketConnection, {
	DispatchEvents,
	Events,
	DispatchChangeUserStatus,
} from '../../api/WebsocketConnection';

// Types
import User from '../../types/User';
import { ReduxAction } from '../types';

// Actions
import { postSuccess as successLogin } from '../auth/login/loginSlice';
import { postSuccess as successRegister } from '../auth/register/registerSlice';
import { successCheckToken } from '../users/current/currentSlice';
import {
	setUsers,
	updateSingleUser,
	updateUserStatus,
} from '../users/list/listSlice';
import { Message } from '../messages/types';
import { addMessage } from '../messages/messagesSlice';

function* connect(): Generator {
	yield call(WebsocketConnection.connect);

	yield fork(watchForEvents);
	yield fork(dispatchEvents);
}

function runChannel(): EventChannel<ReduxAction<any>> {
	return eventChannel((emit) => {
		WebsocketConnection.listen(Events.usersList, (users: User[]): void => {
			emit(setUsers({ users }));
		});

		WebsocketConnection.listen(Events.usersListUpdate, (user: User): void => {
			emit(updateSingleUser({ user }));
		});

		WebsocketConnection.listen(Events.messages, (messages: Message[]): void => {
			emit(addMessage({ messages }));
		});

		return (): void => {
			WebsocketConnection.disconnect();
		};
	});
}

export function* dispatchEvents() {
	while (true) {
		const { payload: { id, status } } = yield take(updateUserStatus);

		WebsocketConnection
			.dispatch<DispatchChangeUserStatus>(DispatchEvents.userStatusChange, { id, status });
	}
}

function* watchForEvents() {
	const channel = yield call(runChannel);

	while (true) {
		const action = yield take(channel);

		yield put(action);
	}
}

export default function* socketSaga(): Generator {
	yield all([
		takeLatest(successLogin, connect),
		takeLatest(successRegister, connect),
		takeLatest(successCheckToken, connect),
	]);
}
