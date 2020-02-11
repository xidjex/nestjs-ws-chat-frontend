import UserStatus from '../userStatus';

export type UserState = {
    name: string;
    isAdmin: boolean;
    status: UserStatus;
    email: string;
};

export type SetCurrentUserAction = {
    payload: {
        user: UserState;
    };
}
