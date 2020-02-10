export type TargetType = {
    [key: string]: string;
}

export type ValidationErrorType = {
    constraints: any;
    target: TargetType;
    property: string;
}

export interface FailedRequestAction<T = string> {
    payload: {
        error: string;
        message: T;
        statusCode: number;
    };
}

export interface SuccessRequestAction {
    payload: any;
}

export interface ValidationErrors {
    [key: string]: string;
}
