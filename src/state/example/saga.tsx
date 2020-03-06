import { takeLatest, put, call } from 'redux-saga/effects'
import { getBreeds } from '../../network/example'
import { FETCH_BREEDS, GET_BREEDS } from './types'

function* fetchBreeds() {
  try {
    const { data } = yield call(getBreeds)
    const breeds = Object.keys(data.message)
    yield put({ type: GET_BREEDS, payload: breeds })
  } catch (e) {
    // TODO: catch exception
    console.log(e)
  }
}

function* watchFetchBreeds() {
  yield takeLatest(FETCH_BREEDS, fetchBreeds)
}

export default [watchFetchBreeds()]
