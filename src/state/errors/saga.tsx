import { takeLatest, put, call } from 'redux-saga/effects'
import { getToken } from '../../network/accessToken'
import { FETCH_ERROR, ERROR_UNAUTHORIZED } from './types'
import { AnyAction } from 'redux'

function* fetchToken(action: AnyAction) {
  const { payload } = action
  try {
    const { data } = yield call(getToken, payload)
    const token = Object.keys(data.message)
    yield put({ type: ERROR_UNAUTHORIZED, payload: token })
  } catch (err) {
    console.log(err)
  }
}

function* watchFetchToken() {
  yield takeLatest(FETCH_ERROR, fetchToken)
}

export default [watchFetchToken()]
