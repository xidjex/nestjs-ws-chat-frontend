import { createSlice } from '@reduxjs/toolkit';

// Types
import { UserState, SetCurrentUserAction } from './types';

// Auth Actions
import { postSuccess as successLogin } from '../../auth/login/loginSlice';
import { postSuccess as successRegister } from '../../auth/register/registerSlice';

const initialState = {
	name: '',
	isAdmin: false,
	status: 0,
	email: '',
} as UserState;

const setUserReducer = (state: UserState, action: SetCurrentUserAction): UserState => {
	const { user } = action.payload;

	return { ...state, ...user };
};

const currentSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers: {
		[String(successLogin)]: setUserReducer,
		[String(successRegister)]: setUserReducer,
	},
});

export default currentSlice.reducer;
