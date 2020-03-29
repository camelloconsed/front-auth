import { AnyAction } from 'redux'
import { takeLatest, put, call } from 'redux-saga/effects'
import { FETCH_FORGOT_PASSWORD, GET_FORGOT_PASSWORD_STATUS } from './types'
import { forgotPassword } from '../../network/password'
import { PASSWORD } from '../../config/constants'

function* fetchForgotPassword(action: AnyAction) {
  const { payload } = action
  try {
    yield put({ type: GET_FORGOT_PASSWORD_STATUS, payload: PASSWORD.EMAIL_STATUS.WAITING })
    yield call(forgotPassword, payload)
    yield put({ type: GET_FORGOT_PASSWORD_STATUS, payload: PASSWORD.EMAIL_STATUS.SUCCESS })
  } catch (error) {
    // TODO: Implement error handler
    yield put({ type: GET_FORGOT_PASSWORD_STATUS, payload: PASSWORD.EMAIL_STATUS.ERROR })
  }
}

function* watchFetchForgotPassword() {
  yield takeLatest(FETCH_FORGOT_PASSWORD, fetchForgotPassword)
}

export default [watchFetchForgotPassword()]
