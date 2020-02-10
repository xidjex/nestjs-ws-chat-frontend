import { combineReducers } from 'redux';

// Reducers
import { reducers as authReducers } from './auth';
import { reducers as usersReducers } from './users';

const rootReducer = combineReducers({
	auth: authReducers,
	users: usersReducers,
});

export default rootReducer;
