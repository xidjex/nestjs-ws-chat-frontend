import { AxiosResponse } from 'axios';
import BaseApi from './BaseApi';

// Types
import User from '../types/User';

class AuthApi extends BaseApi {
	login = (
		email: string,
		password: string,
	): Promise<AxiosResponse<LoginResponse>> => this.request({
		type: 'post',
		url: 'login',
		data: { email, password },
	});

	register = (
		email: string,
		password: string,
		name: string,
	): Promise<AxiosResponse<RegisterResponse>> => this.request({
		type: 'post',
		url: 'register',
		data: { email, password, name },
	})
}

export type LoginResponse = {
	accessToken: string;
	refreshToken: string;
	user: User;
}

export type RegisterResponse = {
	accessToken: string;
	refreshToken: string;
	user: User;
}

export default new AuthApi('/auth');
