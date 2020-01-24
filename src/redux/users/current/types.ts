import { UserStatus } from './currentSlice';

export type UserState = {
    name: string,
    isAdmin: boolean,
    status: UserStatus,
    email: string
};

export type SuccessLoginWithCurrentUserAction = {
    payload: {
        user: UserState
    }
}
