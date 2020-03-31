import { all } from 'redux-saga/effects'
import token from './accessToken/saga'
import password from './password/saga'

export default function* rootSaga() {
  yield all([...token, ...password])
}
