import { createAction, createSlice } from '@reduxjs/toolkit';
import { LoginState } from '../../auth/login/types';
import { toggleFailed, toggleLoading, toggleSuccess } from '../../utils/commonReducers';

// Types
import { UserState, SetCurrentUserAction, SuccessUserAuthActionPayload } from './types';

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

const setUserReducer = (state: UserState, action: SetCurrentUserAction): UserState => {
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

export const successRefresh = createAction<SuccessUserAuthActionPayload>(`${createAction.name}/successRefresh`);

export const currentSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		refreshTokens: toggleLoading<UserState>(),
		checkToken: toggleLoading<UserState>(),
		postFailed: toggleFailed<UserState>(),
		postSuccess: toggleSuccess<UserState>(),
	},
	extraReducers: {
		[String(successLogin)]: setUserReducer,
		[String(successRegister)]: setUserReducer,
		[String(successRefresh)]: setUserReducer,
	},
});

export const {
	refreshTokens,
	checkToken,
	postFailed,
} = currentSlice.actions;

export default currentSlice.reducer;
