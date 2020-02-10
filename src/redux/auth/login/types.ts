import { ValidationErrors } from '../../types';

export type LoginState = {
    data: any;
    error: string | null;
    loading: boolean;
    validationErrors: ValidationErrors;
}

export type LoginActionPayload = {
    email: string;
    password: string;
}

export type LoginAction = {
    type: string;
    payload: LoginActionPayload;
}

export type SuccessLoginAction = {
    payload: {
        accessToken: string;
    };
}
