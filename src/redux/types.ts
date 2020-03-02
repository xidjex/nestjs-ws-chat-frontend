import { Action } from 'redux';

export type TargetType = {
    [key: string]: string;
}

export interface ConstraintsType {
    [key: string]: string;
}

export type ApiValidationErrorMessage = {
    constraints: ConstraintsType;
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

export interface ApiValidationError {
    name: string;
    type: string;
    message: string;
}

export interface ReduxAction<T> extends Action<string> {
    payload: T;
}

export interface DefaultState {
    data: any;
    loading?: boolean;
    validationErrors?: ApiValidationError[] | undefined;
}
