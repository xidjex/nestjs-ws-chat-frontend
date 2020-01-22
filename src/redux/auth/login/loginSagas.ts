import { takeLatest, put, call } from 'redux-saga/effects'

// Api
import AuthApi from '../../../api/AuthApi';

// Actions
import {
    login,
    postLoading,
    LoginAction,
    postSuccess,
    postFailed
} from './loginSlice';

function* postLogin(action: LoginAction) {
    const { email, password } = action.payload;

    yield put(postLoading());

    try {
        const { data } = yield call(AuthApi.login, email, password);

        yield put(postSuccess(data));
    } catch (exception) {
        yield put(postFailed(exception.message));
    }

}

export function* watchLogin() {
    yield takeLatest(login, postLogin);
}
