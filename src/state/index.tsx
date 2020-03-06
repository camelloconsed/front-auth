import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './saga'
import rootReducer from './reducer'

const initialState = {}
const enhancers = []

const saga = createSagaMiddleware()
const middleware = [saga]

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: any
  }
}

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__
  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}
const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers)
const store = createStore(rootReducer, initialState, composedEnhancers)
saga.run(rootSaga)

export default store
