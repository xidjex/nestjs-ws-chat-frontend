import { takeLatest, put, call } from 'redux-saga/effects';

// Api
import AuthApi from '../../../api/AuthApi';

// Types
import { LoginAction } from './types';
import User from '../../../types/User';

// Actions
import {
	login,
	postLoading,
	postSuccess,
	postFailed,
} from './loginSlice';

interface LoginType {
	accessToken: string;
	user: User;
}

interface ResultType {
	data: LoginType;
}

function* postLogin(action: LoginAction): Generator {
	const { email, password } = action.payload;

	yield put(postLoading());

	try {
		const result = yield call(AuthApi.login, email, password);
		const { data } = result as ResultType;

		localStorage.setItem('jwt', data.accessToken);

		yield put(postSuccess(data));
	} catch (error) {
		const { data } = error.response;

		yield put(postFailed(data));
	}
}

export default function* watchLogin(): Generator {
	yield takeLatest(login, postLogin);
}
