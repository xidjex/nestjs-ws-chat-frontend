import {
  FailedRequestAction,
  SuccessRequestAction,
  ValidationErrors,
  ValidationErrorType,
} from '../types';

export function toggleLoading<State>() {
  return (state: State): State => ({
    ...state,
    error: null,
    validationErrors: {},
    loading: true,
  });
}

export function toggleFailed<State>() {
  return (state: State, action: FailedRequestAction<Array<ValidationErrorType>>): State => {
    if (action.payload.statusCode === 400) {
      // eslint-disable-next-line max-len
      const validationErrors = action.payload.message.reduce((acc: ValidationErrors, error: ValidationErrorType) => ({
        ...acc,
        [error.property]: Object.values(error.constraints).join(),
      }), {});

      return {
        ...state,
        error: action.payload.error,
        loading: false,
        validationErrors,
      };
    }

    return {
      ...state,
      error: action.payload.message,
      validationErrors: {},
      loading: false,
    };
  };
}

export function toggleSuccess<State>() {
  return (state: State, action: SuccessRequestAction): State => ({
    ...state,
    data: action.payload,
    error: null,
    validationErrors: {},
    loading: false,
  });
}
