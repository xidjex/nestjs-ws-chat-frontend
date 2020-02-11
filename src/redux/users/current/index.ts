import { fork, all } from 'redux-saga/effects';

// Reducers
import currentReducer from './currentSlice';

// Sagas
import watchTokens from './currentSagas';

export function* sagas(): Generator {
	yield all([fork(watchTokens)]);
}

const reducer = currentReducer;

export default reducer;
