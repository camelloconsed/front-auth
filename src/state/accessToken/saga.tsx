import { takeLatest, put, call } from 'redux-saga/effects'
import { getToken } from '../../network/accessToken'
import { FETCH_TOKEN, GET_TOKEN } from './types'
import { ERROR_UNAUTHORIZED, ERROR_BAD_REQUEST } from '../errors/types'
import { AnyAction } from 'redux'

function* fetchToken(action: AnyAction) {
  const { payload } = action
  const data = yield call(getToken, payload)
  console.log(data.status)

  const status = data.status
  switch (status) {
    case '400':
      yield put({ type: ERROR_BAD_REQUEST, payload: status })
      break
    case '401':
      yield put({ type: ERROR_UNAUTHORIZED, payload: status })
    case '201':
      yield put({ type: GET_TOKEN, payload: status })
      break
  }
}

function* watchFetchToken() {
  yield takeLatest(FETCH_TOKEN, fetchToken)
}

export default [watchFetchToken()]

// switch (status) {
//   case 201:
//     yield put({ type: GET_TOKEN, payload: status })
//     // console.log(payload.status)
//     console.log(status)
//     break
//   case 401:
//     yield put({ type: ERROR_UNAUTHORIZED, payload: status })
//     console.log(status)
//     break
//   case 400:
//     yield put({ type: ERROR_BAD_REQUEST, payload: status })
// }
