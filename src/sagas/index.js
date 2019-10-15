//@ts-check
import { takeLatest, all } from 'redux-saga/effects'

import { rehydrationSagas } from './rehydrationSagas'

export default function* root() {
    yield all([
      rehydrationSagas(),
    ]);
}