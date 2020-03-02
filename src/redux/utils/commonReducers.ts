import {
	FailedRequestAction,
	SuccessRequestAction,
	ApiValidationError,
	ApiValidationErrorMessage,
	DefaultState,
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
	return (state: State, action: FailedRequestAction<ApiValidationErrorMessage[]>): State => {
		if (action.payload.statusCode === 400) {
			const validationErrors = action.payload.message.reduce((
				acc: ApiValidationError[],
				error: ApiValidationErrorMessage,
			) => [
				...acc,
				{
					name: error.property,
					type: 'submission',
					message: Object.values(error.constraints).join(),
				},
			], []);

			return {
				...state,
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

export function toggleSuccess<State extends DefaultState>() {
	return (state: State, action: SuccessRequestAction): State => ({
		...state,
		data: {
			...state.data,
			...action.payload,
		},
		error: null,
		loading: false,
	});
}
