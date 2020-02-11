import { AxiosResponse } from 'axios';
import { takeLatest, put, call } from 'redux-saga/effects';

// Api
import AuthApi, { RegisterData } from '../../../api/AuthApi';

// Types
import { RegisterAction } from './types';

// Actions
import {
	register,
	postLoading,
	postSuccess,
	postFailed,
} from './registerSlice';

function* postRegister(action: RegisterAction): Generator {
	const { email, password, name } = action.payload;

	yield put(postLoading());

	try {
		const result = yield call(AuthApi.register, email, password, name);
		const { data } = result as AxiosResponse<RegisterData>;

		localStorage.setItem('jwt', data.accessToken);
		localStorage.setItem('refreshToken', data.refreshToken);

		yield put(postSuccess(data));
	} catch (error) {
		const { data } = error.response;

		yield put(postFailed(data));
	}
}

export default function* watchRegister(): Generator {
	yield takeLatest(register, postRegister);
}
