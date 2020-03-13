import { takeLatest, put, call } from 'redux-saga/effects'
import { getToken } from '../../network/accessToken'
import { FETCH_TOKEN, GET_TOKEN } from './types'
import { AnyAction } from 'redux'

function* fetchToken(action: AnyAction) {
  const { payload } = action
  try {
    const { data } = yield call(getToken, payload)
    const token = Object.keys(data.message)
    yield put({ type: GET_TOKEN, payload: token })
  } catch (err) {
    console.log(err)
  }
}

function* watchFetchToken() {
  yield takeLatest(FETCH_TOKEN, fetchToken)
}

export default [watchFetchToken()]
