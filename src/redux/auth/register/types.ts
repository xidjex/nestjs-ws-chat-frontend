import { ValidationErrors } from '../../types';

export type RegisterState = {
    error: string | null;
    loading: boolean;
    validationErrors: ValidationErrors;
}

export type RegisterActionPayload = {
    email: string;
    password: string;
}

export type RegisterAction = {
    type: string;
    payload: RegisterActionPayload;
}
