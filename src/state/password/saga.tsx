import { AnyAction } from 'redux'
import { takeLatest, put, call } from 'redux-saga/effects'
import { FETCH_FORGOT_PASSWORD, GET_FORGOT_PASSWORD_STATUS } from './types'
import { SERVICE_ERROR } from '../errors/types'
import { forgotPassword } from '../../network/password'
import { PASSWORD } from '../../config/constants'

function* fetchForgotPassword(action: AnyAction) {
  const { payload } = action
  try {
    yield put({ type: GET_FORGOT_PASSWORD_STATUS, payload: PASSWORD.EMAIL_STATUS.WAITING })
    yield call(forgotPassword, payload)
    yield put({ type: GET_FORGOT_PASSWORD_STATUS, payload: PASSWORD.EMAIL_STATUS.SUCCESS })
  } catch (error) {
    yield put({ type: GET_FORGOT_PASSWORD_STATUS, payload: PASSWORD.EMAIL_STATUS.ERROR })

    if (!error.response) {
      yield put({
        type: SERVICE_ERROR,
        payload: PASSWORD.EMAIL_ERROR.INTERNAL_ERROR.MESSAGE
      })
      return
    }

    const { data } = error.response
    let errorMessage = ''

    switch (data.error) {
      case PASSWORD.EMAIL_ERROR.ACCOUNT_NOT_FOUND.CODE:
        errorMessage = PASSWORD.EMAIL_ERROR.ACCOUNT_NOT_FOUND.MESSAGE
        break
      case PASSWORD.EMAIL_ERROR.ACCOUNT_DELETED.CODE:
        errorMessage = PASSWORD.EMAIL_ERROR.ACCOUNT_DELETED.MESSAGE
        break;

      default:
        errorMessage = PASSWORD.EMAIL_ERROR.INTERNAL_ERROR.MESSAGE
        break;
      }
      yield put({ type: SERVICE_ERROR, payload: errorMessage })
  }
}

function* watchFetchForgotPassword() {
  yield takeLatest(FETCH_FORGOT_PASSWORD, fetchForgotPassword)
}

export default [watchFetchForgotPassword()]
