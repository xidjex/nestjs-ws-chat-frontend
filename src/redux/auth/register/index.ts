import { fork, all } from 'redux-saga/effects';

// Reducers
import registerReducer from './registerSlice';

// Sagas
import watchRegister from './registerSagas';

export function* sagas(): Generator {
	yield all([fork(watchRegister)]);
}

export const reducer = registerReducer;
