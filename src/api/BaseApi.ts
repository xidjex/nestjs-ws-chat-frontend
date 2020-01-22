import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_HOST;

interface ParamsInterface {
    [key: string]: string
}

interface HeadersInterface {
    [key: string]: string
}

type RequestType = 'get' | 'post' | 'delete' | 'patch';

interface RequestParamsInterface {
    url: string;
    type?: RequestType,
    params?: ParamsInterface,
    data?: any,
    headers?: HeadersInterface,
}

export class BaseApi {
    constructor(private readonly baseUrl: string = '') {}

    getHeaders(headers: HeadersInterface = {}) {
        const token = localStorage.getItem('jwt');

        return {
            ...headers,
            'Content-Type': 'application/json',
            ...(token && { 'Authorization': `Bearer: ${token}` })
        }
    }

    getUrl(uri: string = '') {
        const divider = '?/'.includes(uri[0]) || !uri ? '' : '/';

        return `${this.baseUrl}${divider}${uri}`;
    }

    request(params: RequestParamsInterface): Promise<any> {
        return axios.request({
            ...params,
            url: this.getUrl(params.url),
            headers: this.getHeaders(params.headers),
            method: params.type
        });
    }
}
