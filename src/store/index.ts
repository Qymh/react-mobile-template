import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import * as global from './reducers/home';
import saga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({ ...(global as any) });
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(saga);

export default store;
