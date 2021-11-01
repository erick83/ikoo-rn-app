import { all } from 'redux-saga/effects'
import authSaga from './auth/sagas'
import p2pSaga from './p2p/sagas'
import transactionsSaga from './transactions/sagas'

export default function* rootSaga() {
  yield all([
    ...authSaga,
    ...p2pSaga,
    ...transactionsSaga,
  ])
}
