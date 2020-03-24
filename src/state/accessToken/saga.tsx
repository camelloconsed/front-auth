import { takeLatest, put, call } from 'redux-saga/effects'
import { getToken } from '../../network/accessToken'
import { FETCH_TOKEN, GET_TOKEN } from './types'
import { ERROR_UNAUTHORIZED, ERROR_BAD_REQUEST, ERROR_SERVER } from '../errors/types'
import { AnyAction } from 'redux'
import Cookies from 'js-cookie'
import { network } from '../../config'

function* fetchToken(action: AnyAction) {
  const { payload } = action
  try {
    const response = yield call(getToken, payload)
    Cookies.set('token', response.data.access_token, { domain: network.cookieHost })
    Cookies.set('ref_token', response.data.refresh_token, { domain: network.cookieHost })
    yield put({ type: GET_TOKEN, payload })
  } catch (error) {
    const { status } = error.response
    const errorResponse = error.response.data
    switch (status) {
      case 400:
        yield put({ type: ERROR_BAD_REQUEST, payload: errorResponse })
        break
      case 401:
        yield put({ type: ERROR_UNAUTHORIZED, payload: errorResponse })
        break
      case 500:
        yield put({ type: ERROR_SERVER, payload: errorResponse })
        break
      default:
        break
    }
  }
}

function* watchFetchToken() {
  yield takeLatest(FETCH_TOKEN, fetchToken)
}

export default [watchFetchToken()]
