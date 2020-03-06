import { AxiosResponse } from 'axios';

import BaseApi, { RequestType } from './BaseApi';

// Types
import User from '../types/User';

class AuthApi extends BaseApi {
	login = (
		email: string,
		password: string,
	): Promise<AxiosResponse<LoginData>> => this.request({
		type: RequestType.post,
		url: 'login',
		data: { email, password },
	});

	logout = (): Promise<AxiosResponse> => this.request({
		type: RequestType.post,
		url: 'logout',
	});

	register = (
		email: string,
		password: string,
		name: string,
	): Promise<AxiosResponse<RegisterData>> => this.request({
		type: RequestType.post,
		url: 'register',
		data: { email, password, name },
	});

	checkToken = (): Promise<AxiosResponse<CheckTokenData>> => this.request({
		type: RequestType.post,
		url: 'check_token',
	});

	refreshToken = (refreshToken: string): Promise<AxiosResponse<RefreshTokenData>> => this.request({
		type: RequestType.post,
		url: 'refresh_token',
		data: { refreshToken },
	});
}

// Types
export type LoginData = {
	accessToken: string;
	refreshToken: string;
	user: User;
}

export type RegisterData = {
	accessToken: string;
	refreshToken: string;
	user: User;
}

export type RefreshTokenData = {
	accessToken: string;
	refreshToken: string;
	user: User;
}

export type CheckTokenData = {
	user: User;
}

export default new AuthApi('/auth');
