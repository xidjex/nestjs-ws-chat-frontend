import { all, fork } from "redux-saga/effects";

// Sagas
import { sagas as authSagas } from "./auth";

export default function* rootSaga() {
    yield all([fork(authSagas)]);
}
