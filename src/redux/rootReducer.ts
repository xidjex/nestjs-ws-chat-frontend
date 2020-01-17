import { combineReducers } from "redux";

// Reducers
import { reducers as authReducers } from './auth';

const rootReducer = combineReducers({
    auth: authReducers
});

export default rootReducer;

