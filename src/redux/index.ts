import createSagaMiddleware from 'redux-saga';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

import {postLoading, login} from './auth/login/loginSlice';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware({ thunk: false, serializableCheck: false }), sagaMiddleware]
});

sagaMiddleware.run(rootSaga);

console.log(postLoading(1));

setTimeout(() => store.dispatch(login({ email: 'sds', password: 'sdsd' })), 1000);

export type AppDispatch = typeof store.dispatch

export default store;
