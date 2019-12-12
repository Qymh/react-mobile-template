import { takeEvery, delay, put } from 'redux-saga/effects';

export function* saga() {
  yield takeEvery('increase', increase);
}

function* increase(t: any) {
  yield delay(1000);
  yield put({ type: 'change_state', counter: t.counter });
}
