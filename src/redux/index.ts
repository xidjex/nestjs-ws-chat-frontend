import createSagaMiddleware from 'redux-saga';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
	reducer: rootReducer,
	middleware: [
		...getDefaultMiddleware({ thunk: false, serializableCheck: false }),
		sagaMiddleware,
	],
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch

export default store;
