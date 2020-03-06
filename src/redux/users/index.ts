import { combineReducers } from 'redux';
import { all, fork } from 'redux-saga/effects';

import currentUserReducer, { sagas as currentSagas } from './current';
import usersListReducer, { sagas as usersListSagas } from './list';

export function* sagas(): Generator {
	yield all([
		fork(currentSagas),
		fork(usersListSagas),
	]);
}

export const reducers = combineReducers({
	current: currentUserReducer,
	list: usersListReducer,
});
