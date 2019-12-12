import * as home from './home';
import { fork, all } from 'redux-saga/effects';

function generateFn(value: any[]) {
  const arr = [];
  for (const item of value) {
    for (const key in item) {
      arr.push(fork(item[key]));
    }
  }
  return arr;
}

export default function* root() {
  yield all(generateFn([home]));
}
