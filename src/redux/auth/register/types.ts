import { DefaultState, ReduxAction } from '../../types';

export interface RegisterState extends DefaultState {
    error: string | null;
    loading: boolean;
}

export type RegisterActionPayload = {
    email: string;
    password: string;
    name: string;
}

export type RegisterAction = ReduxAction<RegisterActionPayload>
