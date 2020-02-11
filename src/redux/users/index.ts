import { combineReducers } from 'redux';
import { all, fork } from 'redux-saga/effects';
import currentUserReducer, { sagas as currentSagas } from './current';

// Reducers
export function* usersSagas(): Generator {
	yield all([
		fork(currentSagas),
	]);
}

export const reducers = combineReducers({
	current: currentUserReducer,
});
