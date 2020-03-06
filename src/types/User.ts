import UserStatus from './UserStatus';

export default interface User {
    id: number;
    name: string;
    email: string;
    isAdmin: boolean;
    status: UserStatus;
    isOnline?: boolean;
}
