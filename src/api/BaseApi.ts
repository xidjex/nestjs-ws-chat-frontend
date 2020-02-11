import axios, { AxiosPromise } from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_HOST;

interface ParamsInterface {
    [key: string]: string;
}

interface HeadersInterface {
    [key: string]: string;
}

export enum RequestType {
	get = 'get',
	post = 'post',
	delete = 'delete',
	patch = 'patch',
}

interface DataType {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[key: string]: any;
}

interface RequestParamsInterface {
    url: string;
    type?: RequestType;
    params?: ParamsInterface;
    data?: DataType;
    headers?: HeadersInterface;
}

export default class BaseApi {
	// eslint-disable-next-line no-useless-constructor
	constructor(private readonly baseUrl: string = '') {}

	// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
	static getHeaders(headers: HeadersInterface = {}) {
		const token = localStorage.getItem('jwt');

		return {
			...headers,
			'Content-Type': 'application/json',
			...(token && { Authorization: `Bearer: ${token}` }),
		};
	}

	getUrl(uri = ''): string {
		const divider = '?/'.includes(uri[0]) || !uri ? '' : '/';

		return `${this.baseUrl}${divider}${uri}`;
	}

	request(params: RequestParamsInterface): AxiosPromise {
		return axios.request({
			...params,
			url: this.getUrl(params.url),
			headers: BaseApi.getHeaders(params.headers),
			method: params.type,
		});
	}
}
