import {
	DefaultState,
	ReduxAction,
	ValidationErrors,
} from '../../types';

export interface LoginState extends DefaultState {
    error: string | null;
    loading: boolean;
    validationErrors: ValidationErrors;
}

export type LoginActionPayload = {
    email: string;
    password: string;
}

export type LoginAction = ReduxAction<LoginActionPayload>
