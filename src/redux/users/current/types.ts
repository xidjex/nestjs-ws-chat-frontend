import { DefaultState, ReduxAction } from '../../types';
import User from '../../../types/User';

interface UserData extends User {
    authorized: boolean;
}

export interface UserState extends DefaultState {
    data: UserData;
    loading: boolean;
}

export type SetCurrentUserAction = {
    user: User;
}

export type SuccessUserAuthActionPayload = {
    accessToken: string;
    refreshToken: string;
    user: User;
}

export type TokenPayload = {
    exp: number;
    iat: number;
}

export type SuccessUserAuthAction = ReduxAction<SuccessUserAuthActionPayload>;
