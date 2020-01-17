export interface FailedRequestAction {
    payload: {
        error: string
    }
}

export interface SuccessRequestAction {
    payload: {
        data: any
    }
}

export interface GenericState<T> {
    data?: T;
    loading?: boolean;
    error?: string | null;
}
