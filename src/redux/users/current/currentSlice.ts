import { createAction, createSlice } from '@reduxjs/toolkit';
import { ReduxAction } from '../../types';

// Types
import { UserState, SetCurrentUserAction } from './types';

// Utils
import {
	toggleFailed,
	toggleLoading,
	toggleSuccess,
} from '../../utils/commonReducers';

// Auth Actions
import { postSuccess as successLogin } from '../../auth/login/loginSlice';
import { postSuccess as successRegister } from '../../auth/register/registerSlice';

const initialState = {
	data: {
		name: '',
		isAdmin: false,
		status: 0,
		email: '',
		authorized: false,
	},
	loading: true,
} as UserState;

const setUserReducer = (state: UserState, action: ReduxAction<SetCurrentUserAction>): UserState => {
	const { user } = action.payload;

	return {
		...state,
		data: {
			...state.data,
			...user,
			authorized: true,
		},
		loading: false,
	};
};

export const currentSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		refreshTokens: toggleLoading<UserState>(),
		successRefreshToken: setUserReducer,

		checkToken: toggleLoading<UserState>(),
		successCheckToken: setUserReducer,

		postFailed: toggleFailed<UserState>(),
		postSuccess: toggleSuccess<UserState>(),

		setAuthorized: (state: UserState, action: ReduxAction<boolean>): UserState => ({
			...state,
			data: {
				...state.data,
				authorized: action.payload,
			},
		}),
	},
	extraReducers: {
		[String(successLogin)]: setUserReducer,
		[String(successRegister)]: setUserReducer,
	},
});

export const logout = createAction(`${currentSlice.name}/logout`);

export const {
	refreshTokens,
	checkToken,
	setAuthorized,
	successCheckToken,
	successRefreshToken,
	postFailed,
} = currentSlice.actions;

export default currentSlice.reducer;
