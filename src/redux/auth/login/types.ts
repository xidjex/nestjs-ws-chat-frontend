import {
	DefaultState,
	ReduxAction,
} from '../../types';

export interface LoginState extends DefaultState {
    error: string | null;
    loading: boolean;
}

export type LoginActionPayload = {
    email: string;
    password: string;
}

export type LoginAction = ReduxAction<LoginActionPayload>
