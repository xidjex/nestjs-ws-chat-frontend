import UserStatus from '../userStatus';
import User from '../../../types/User';

type UserData = {
    name: string;
    isAdmin: boolean;
    status: UserStatus;
    email: string;
    authorized: boolean;
}

export type UserState = {
    data: UserData;
    loading: boolean;
};

export type SetCurrentUserAction = {
    payload: {
        user: UserState;
    };
}

export type SuccessUserAuthActionPayload = {
    accessToken: string;
    refreshToken: string;
    user: User;
}

export type SuccessUserAuthAction = {
    type: string;
    payload: SuccessUserAuthActionPayload;
}

export type SuccessRefreshAction = {
    type: string;
    payload: SuccessUserAuthActionPayload;
}
