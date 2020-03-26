import { all } from 'redux-saga/effects'
import token from './accessToken/saga'

export default function* rootSaga() {
  yield all([...token])
}
