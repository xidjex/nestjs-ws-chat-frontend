import { createAction, createSlice } from '@reduxjs/toolkit';

// Types
import {
	LoginState,
	LoginActionPayload,
} from './types';

// Utils
import {
	toggleFailed,
	toggleLoading, toggleSuccess,
} from '../../utils/commonReducers';

const initialState = {
	error: null,
	loading: false,
} as LoginState;

const authSlice = createSlice({
	name: 'auth.login',
	initialState,
	reducers: {
		postLoading: toggleLoading<LoginState>(),
		postFailed: toggleFailed<LoginState>(),
		postSuccess: toggleSuccess<LoginState>(),
	},
});

export const login = createAction<LoginActionPayload>(`${authSlice.name}/login`);

export const {
	postLoading,
	postSuccess,
	postFailed,
} = authSlice.actions;


export default authSlice.reducer;
