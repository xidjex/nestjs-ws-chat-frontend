import {
    createSlice,
    createAction,
} from '@reduxjs/toolkit';

// Utils
import makeRequestReducers, { RequestTypes } from "../../utils/makeRequestReducers";

export interface LoginState {
    error: string | null;
    loading: boolean;
}

export interface LoginAction {
    type: string;
    payload?: {
        email: string;
        password: string;
    };
}

export interface LoginActionPayload {
    email: string;
    password: string;
}

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        loading: false,
        error: null
    } as LoginState,
    reducers: makeRequestReducers<LoginState>(RequestTypes.post)
});

export const login = createAction<LoginActionPayload>(`${authSlice.name}/login`);

export const {
    postLoading,
    postSuccess,
    postFailed
} = authSlice.actions;


export default authSlice.reducer;
