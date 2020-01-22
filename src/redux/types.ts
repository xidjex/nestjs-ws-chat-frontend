export interface FailedRequestAction {
    payload: {
        error: string
    }
}

export interface SuccessRequestAction {
    payload: any
}
