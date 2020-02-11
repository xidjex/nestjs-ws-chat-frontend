import { AxiosPromise } from 'axios';
import BaseApi from './BaseApi';

class AuthApi extends BaseApi {
	login = (email: string, password: string): AxiosPromise => this.request({
		type: 'post',
		url: 'login',
		data: { email, password },
	});

	register = (email: string, password: string, name: string): AxiosPromise => this.request({
		type: 'post',
		url: 'register',
		data: { email, password, name },
	})
}

export default new AuthApi('/auth');
