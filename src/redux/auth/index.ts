import { combineReducers } from 'redux';
import { all, fork } from 'redux-saga/effects';

// Reducers
import { reducer as loginReducer, sagas as loginSagas } from './login';
import { reducer as registerReducer, sagas as registerSagas } from './register';

export function* authSagas(): Generator {
	yield all([
		fork(loginSagas),
		fork(registerSagas),
	]);
}

export const reducers = combineReducers({
	login: loginReducer,
	register: registerReducer,
});
