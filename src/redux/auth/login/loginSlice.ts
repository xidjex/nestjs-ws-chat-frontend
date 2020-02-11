import { createAction, createSlice } from '@reduxjs/toolkit';

// Types
import {
	LoginState,
	SuccessLoginAction,
	LoginActionPayload,
} from './types';

// Utils
import {
	toggleFailed,
	toggleLoading,
} from '../../utils/commonReducers';

const authSlice = createSlice({
	name: 'auth.login',
	initialState: {
		data: null,
		error: null,
		loading: false,
		validationErrors: {},
	} as LoginState,
	reducers: {
		postLoading: toggleLoading<LoginState>(),
		postFailed: toggleFailed<LoginState>(),
		postSuccess: (state: LoginState, action: SuccessLoginAction): LoginState => {
			const { accessToken } = action.payload;

			return {
				...state,
				data: { accessToken },
				loading: false,
			};
		},
	},
});

export const login = createAction<LoginActionPayload>(`${authSlice.name}/login`);

export const {
	postLoading,
	postSuccess,
	postFailed,
} = authSlice.actions;


export default authSlice.reducer;
