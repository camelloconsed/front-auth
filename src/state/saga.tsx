import { all } from 'redux-saga/effects';
import example from './example/saga';

export default function* rootSaga() {
  yield all([ ...example ])
};
