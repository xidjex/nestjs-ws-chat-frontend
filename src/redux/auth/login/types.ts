import { ValidationErrors } from '../../types';

export type LoginState = {
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
