import { FailedRequestAction, SuccessRequestAction } from '../types';

export function toggleLoading<State>() {
    return (state: State): State => ({
        ...state,
        error: null,
        loading: true
    })
}

export function toggleFailed<State>() {
    return (state: State, action: FailedRequestAction): State => ({
        ...state,
        error: action.payload,
        loading: false
    })
}

export function toggleSuccess<State>() {
    return (state: State, action: SuccessRequestAction): State => ({
        ...state,
        data: action.payload,
        error: null,
        loading: false
    })
}
