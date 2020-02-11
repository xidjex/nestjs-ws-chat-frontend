import { createAction, createSlice } from '@reduxjs/toolkit';

// Types
import {
	RegisterState,
	RegisterActionPayload,
} from './types';

// Utils
import {
	toggleFailed,
	toggleLoading, toggleSuccess,
} from '../../utils/commonReducers';

const initialState = {
	data: {},
	error: null,
	loading: false,
	validationErrors: {},
} as RegisterState;

const authSlice = createSlice({
	name: 'auth.register',
	initialState,
	reducers: {
		postLoading: toggleLoading<RegisterState>(),
		postFailed: toggleFailed<RegisterState>(),
		postSuccess: toggleSuccess<RegisterState>(),
	},
});

export const register = createAction<RegisterActionPayload>(`${authSlice.name}/login`);

export const {
	postLoading,
	postSuccess,
	postFailed,
} = authSlice.actions;


export default authSlice.reducer;
