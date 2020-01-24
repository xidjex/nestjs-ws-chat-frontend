import { takeLatest, put, call } from 'redux-saga/effects';

// Api
import AuthApi from '../../../api/AuthApi';

// Types
import { LoginAction } from './types';

// Actions
import {
  login,
  postLoading,
  postSuccess,
  postFailed,
} from './loginSlice';

function* postLogin(action: LoginAction) {
  const { email, password } = action.payload;

  yield put(postLoading());

  try {
    const { data } = yield call(AuthApi.login, email, password);

    localStorage.setItem('jwt', data.accessToken);

    yield put(postSuccess(data));
  } catch (error) {
    const { data } = error.response;

    yield put(postFailed(data));
  }
}

export default function* watchLogin() {
  yield takeLatest(login, postLogin);
}
