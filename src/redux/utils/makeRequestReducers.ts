import { PayloadAction, SliceCaseReducers, ValidateSliceCaseReducers } from '@reduxjs/toolkit';
import { LoginState } from '../auth/login/loginSlice';

import { SuccessRequestAction, FailedRequestAction } from '../types';

export enum RequestTypes {
    get = 'get',
    post = 'post'
}

export default function makeRequestReducers<T>(type: RequestTypes): ValidateSliceCaseReducers<T, SliceCaseReducers<T>> {
    return {
        [`${type}Loading`]: (state: T, { payload = 1 }: PayloadAction<number | undefined>): T => ({
            ...state,
            error: null,
            loading: true
        }),
        [`${type}Failed`]: (state: T, action: FailedRequestAction): T => ({
            ...state,
            error: action.payload.error,
            loading: false
        }),
        [`${type}getSuccess`]: (state: T, action: SuccessRequestAction) => ({
            ...state,
            data: action.payload.data,
            error: null,
            loading: false
        }),
    } as ValidateSliceCaseReducers<T, SliceCaseReducers<T>>
}
