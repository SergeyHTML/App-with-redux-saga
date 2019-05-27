import { createStore, applyMiddleware } from 'redux'
import reducer from '../reduser/index'
import mySaga from '../saga/mySaga'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware();
const enhanser = applyMiddleware(sagaMiddleware);

const store = createStore(reducer, {}, enhanser);

sagaMiddleware.run(mySaga);
//dev only
// window.store = store;

export default store
