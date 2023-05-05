import {configureStore} from '@reduxjs/toolkit';
import {rootReducer} from './reducers';
import createSagaMiddleware from '@redux-saga/core';
import {rootSaga} from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
