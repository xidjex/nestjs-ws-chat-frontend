import { all, fork } from 'redux-saga/effects';

// Sagas
import { authSagas } from './auth';
import { usersSagas } from './users';

export default function* rootSaga() {
	yield all([fork(authSagas), fork(usersSagas)]);
}
