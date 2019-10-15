import { takeLatest, all, put} from 'redux-saga/effects'
import { clearSearch } from '../Search/redux/actions'

export function * onRehydrate (action) {
    yield put(clearSearch())
}

export function * rehydrationSagas() {
    yield all ([
        takeLatest('persist/REHYDRATE', onRehydrate),
    ])
}