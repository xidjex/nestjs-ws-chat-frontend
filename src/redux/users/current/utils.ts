import { TokenPayload } from './types';

const getTokenExpirationDate = (token: string): Date => {
	const [, payload] = token.split('.');

	const { exp } = JSON.parse(atob(payload)) as TokenPayload;

	return new Date(exp * 1000);
};

export default getTokenExpirationDate;
