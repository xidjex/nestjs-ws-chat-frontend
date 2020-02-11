import { AxiosResponse } from 'axios';
import { takeLatest, put, call } from 'redux-saga/effects';

// Api
import AuthApi, { LoginData } from '../../../api/AuthApi';

// Types
import { LoginAction } from './types';

// Actions
import {
	login,
	postLoading,
	postSuccess,
	postFailed,
} from './loginSlice';

function* postLogin(action: LoginAction): Generator {
	const { email, password } = action.payload;

	yield put(postLoading());

	try {
		const result = yield call(AuthApi.login, email, password);
		const { data } = result as AxiosResponse<LoginData>;

		localStorage.setItem('jwt', data.accessToken);
		localStorage.setItem('refreshToken', data.refreshToken);

		yield put(postSuccess(data));
	} catch (error) {
		const { data } = error.response;

		yield put(postFailed(data));
	}
}

export default function* watchLogin(): Generator {
	yield takeLatest(login, postLogin);
}
