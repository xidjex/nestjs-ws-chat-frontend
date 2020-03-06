import { number } from 'yup';
import UserStatus from '../../../types/UserStatus';
import { DefaultState } from '../../types';
import User from '../../../types/User';

export interface UserData extends User {
    isOnline?: boolean;
}

export interface UsersListState extends DefaultState {
    data: UserData[];
}

export type SetUsersListAction = {
    users: User[];
}

export interface UpdateUserStatusPayload {
    id: number;
    status: UserStatus;
}
