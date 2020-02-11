import { AxiosResponse } from 'axios';
import {
	takeLatest,
	put,
	call,
	delay,
} from 'redux-saga/effects';

// Api
import AuthApi, { RefreshTokenData } from '../../../api/AuthApi';
import { postSuccess as successLogin } from '../../auth/login/loginSlice';
import { postSuccess as successRegister } from '../../auth/register/registerSlice';

// Types
import { SuccessUserAuthAction } from './types';
import { successRefresh, refreshTokens as refreshTokensAction, postFailed } from './currentSlice';
import getTokenExpirationDate from './utils';

function* refreshTokens(): Generator {
	try {
		const refreshToken = String(localStorage.getItem('refreshToken'));

		const result = yield call(AuthApi.refreshToken, refreshToken);
		const { data } = result as AxiosResponse<RefreshTokenData>;

		yield put(successRefresh(data));
	} catch (error) {
		const { data } = error.response;

		yield put(postFailed(data));
	}
}

function* manageTokens(action: SuccessUserAuthAction): Generator {
	const { accessToken, refreshToken } = action.payload;

	localStorage.setItem('jwt', accessToken);
	localStorage.setItem('refreshToken', refreshToken);

	const accessTokenExpDate = +(getTokenExpirationDate(accessToken));
	const currentDate = +(new Date());

	yield delay(accessTokenExpDate - currentDate);
	yield put(refreshTokensAction());
}

export default function* watchTokens(): Generator {
	yield takeLatest(successLogin, manageTokens);
	yield takeLatest(successRegister, manageTokens);
	yield takeLatest(successRefresh, manageTokens);
	yield takeLatest(refreshTokensAction, refreshTokens);
}
