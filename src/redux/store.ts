import {createStore, applyMiddleware, combineReducers} from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'

import rootSaga from './root-saga'
import authReducer from './auth/reducer'
import p2pReducer from './p2p/reducer'
import transactionsReducer from './transactions/reducer'
import refreshReducer from './refreshing/reducer'
import loaderReducer from './loader/reducer'

const sagaMiddleware = createSagaMiddleware()

const state = combineReducers({
  auth: authReducer,
  p2p: p2pReducer,
  transactions: transactionsReducer,
  refresh: refreshReducer,
  loader: loaderReducer,
})

const store = createStore(state, applyMiddleware(sagaMiddleware, logger))

sagaMiddleware.run(rootSaga)

export default store
