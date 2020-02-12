import { all, fork } from 'redux-saga/effects';

// Sagas
import { sagas as authSagas } from './auth';
import { sagas as usersSagas } from './users';

export default function* rootSaga(): Generator {
	yield all([
		fork(authSagas),
		fork(usersSagas),
	]);
}
