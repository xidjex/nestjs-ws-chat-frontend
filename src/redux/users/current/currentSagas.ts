import { AxiosResponse } from 'axios';
import {
	takeLatest,
	put,
	call,
	delay,
	all,
} from 'redux-saga/effects';

// Api
import AuthApi, {
	RefreshTokenData,
	CheckTokenData,
} from '../../../api/AuthApi';

// Actions
import { postSuccess as successLogin } from '../../auth/login/loginSlice';
import { postSuccess as successRegister } from '../../auth/register/registerSlice';
import {
	successRefreshToken,
	refreshTokens as refreshTokensAction,
	checkToken as checkTokenAction,
	postFailed,
	setAuthorized,
	successCheckToken,
	logout as logoutAction,
} from './currentSlice';

// Types
import { SuccessUserAuthAction } from './types';

// Utils
import getTokenExpirationDate from './utils';

function* manageTokens(action: SuccessUserAuthAction): Generator {
	const { accessToken, refreshToken } = action.payload;

	localStorage.setItem('jwt', accessToken);
	localStorage.setItem('refreshToken', refreshToken);

	yield runRefreshTokenTask(accessToken);
}

function* runRefreshTokenTask(accessToken: string): Generator {
	const accessTokenExpDate = +(getTokenExpirationDate(accessToken));
	const currentDate = +(new Date());

	yield delay(accessTokenExpDate - currentDate);

	yield refreshTokens();
}

function* refreshTokens(): Generator {
	try {
		const refreshToken = String(localStorage.getItem('refreshToken'));

		const result = yield call(AuthApi.refreshToken, refreshToken);
		const { data } = result as AxiosResponse<RefreshTokenData>;

		yield put(successRefreshToken(data));
	} catch (error) {
		const { data } = error.response;

		yield put(postFailed(data));
		yield put(setAuthorized(false));
	}
}

function* checkToken(): Generator {
	try {
		const result = yield call(AuthApi.checkToken);
		const { data } = result as AxiosResponse<CheckTokenData>;

		yield put(successCheckToken(data));

		const accessToken = String(localStorage.getItem('jwt'));

		yield runRefreshTokenTask(accessToken);
	} catch (error) {
		if (error.response.status === 403) {
			yield put(setAuthorized(false));

			return;
		}

		yield refreshTokens();
	}
}

function* logout(): Generator {
	try {
		yield call(AuthApi.logout);

		yield put(setAuthorized(false));

		localStorage.removeItem('jwt');
		localStorage.removeItem('refreshToken');
	} catch (error) {
		const { data } = error.response;

		yield put(postFailed(data));
	}
}

export default function* watchTokens(): Generator {
	yield all([
		takeLatest(successLogin, manageTokens),
		takeLatest(successRegister, manageTokens),
		takeLatest(successRefreshToken, manageTokens),
		takeLatest(refreshTokensAction, refreshTokens),
		takeLatest(checkTokenAction, checkToken),
		takeLatest(logoutAction, logout),
	]);
}
