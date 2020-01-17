import { combineReducers } from "redux";
import { all, fork } from "redux-saga/effects";

// Reducers
import { reducer as loginReducer, sagas as loginSagas } from './login'

export function* sagas() {
    yield all([fork(loginSagas)]);
}

export const reducers = combineReducers({
    login: loginReducer
});
