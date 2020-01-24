import { fork, all } from 'redux-saga/effects';

// Reducers
import loginReducer from './loginSlice';

// Sagas
import watchLogin from './loginSagas';

export function* sagas() {
  yield all([fork(watchLogin)]);
}

export const reducer = loginReducer;
