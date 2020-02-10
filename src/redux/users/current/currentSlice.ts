import { createSlice } from '@reduxjs/toolkit';

// Types
import { UserState, SuccessLoginWithCurrentUserAction } from './types';

// Auth Actions
import { postSuccess } from '../../auth/login/loginSlice';

export enum UserStatus {
    active,
    banned,
    muted
}

const currentSlice = createSlice({
	name: 'auth',
	initialState: {
		name: '',
		isAdmin: false,
		status: 0,
		email: '',
	} as UserState,
	reducers: {},
	extraReducers: {
		// eslint-disable-next-line max-len
		[String(postSuccess)]: (state: UserState, action: SuccessLoginWithCurrentUserAction) => action.payload.user,
	},
});

export default currentSlice.reducer;
