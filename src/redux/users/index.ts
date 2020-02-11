import { combineReducers } from 'redux';

// Reducers
import currentUserReducer from './current';

export function* usersSagas(): Generator {
	yield null;
}

export const reducers = combineReducers({
	current: currentUserReducer,
});
