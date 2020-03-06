import { fork, all } from 'redux-saga/effects';

// Reducers
import listReducer from './listSlice';

// Sagas
import watchUsersList from './listSagas';

export function* sagas(): Generator {
	yield all([fork(watchUsersList)]);
}

const reducer = listReducer;

export default reducer;
