import { takeLatest, put, race } from 'redux-saga/effects'

// Actions
import { login, postLoading, LoginAction, postSuccess } from './loginSlice';

function* postLogin(action: LoginAction) {
    yield race([put(postLoading({})), put(postSuccess({ data: { data: 'lolo' } }))]);
}

export function* watchLogin() {
    yield takeLatest(login, postLogin);
}
