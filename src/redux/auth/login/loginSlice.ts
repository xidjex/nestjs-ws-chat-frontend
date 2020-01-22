import { createAction, createSlice } from '@reduxjs/toolkit';

// Utils
import {
    toggleFailed,
    toggleLoading,
} from '../../utils/commonReducers';

export type LoginState = {
    data: any;
    error: string | null;
    loading: boolean;
}

export type LoginActionPayload = {
    email: string;
    password: string;
}

export type LoginAction = {
    type: string;
    payload: LoginActionPayload;
}

export type SuccessLoginAction = {
    payload: {
        accessToken: string
    };
}

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        data: null,
        error: null,
        loading: false
    } as LoginState,
    reducers: {
        postLoading: toggleLoading<LoginState>(),
        postFailed: toggleFailed<LoginState>(),
        postSuccess: (state: LoginState, action: SuccessLoginAction) => {
            const { accessToken } = action.payload;

            localStorage.setItem('jwt', accessToken);

            return {
                ...state,
                data: { accessToken },
                loading: false,
            }
        },
    }
});

export const login = createAction<LoginActionPayload>(`${authSlice.name}/login`);

export const {
    postLoading,
    postSuccess,
    postFailed
} = authSlice.actions;


export default authSlice.reducer;
