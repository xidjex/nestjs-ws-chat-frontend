import { DefaultState, ReduxAction, ValidationErrors } from '../../types';

export interface RegisterState extends DefaultState {
    error: string | null;
    loading: boolean;
    validationErrors: ValidationErrors;
}

export type RegisterActionPayload = {
    email: string;
    password: string;
    name: string;
}

export type RegisterAction = ReduxAction<RegisterActionPayload>
