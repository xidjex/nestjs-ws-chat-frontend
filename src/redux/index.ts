import createSagaMiddleware from 'redux-saga';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

import { register } from './auth/register/registerSlice';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
	reducer: rootReducer,
	middleware: [...getDefaultMiddleware({ thunk: false, serializableCheck: false }), sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

setTimeout(() => store.dispatch(register({ email: 'masdsdddidfl@mail.com', password: 'q1w2e3r4', name: 'sdsddfsdsd' })), 1000);

export type AppDispatch = typeof store.dispatch

export default store;
