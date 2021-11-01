import { call, takeEvery, put } from "redux-saga/effects";
import qs from 'qs'

import { fetchService } from "../../services/fetch";
import { actionsTypes, setTransactions } from './actions'
import { IState, ResponseGenerator } from "../../model/reducers.interfaces";
import { refreshEnd } from "../refreshing/actions";

function * getTransactions() {
  try {
    const url = '/user/transactions'
    const resp:ResponseGenerator = yield call(fetchService, url)
    if (resp.status === 200) {
      yield put(setTransactions(resp.data.transactions))
      yield put(refreshEnd())
    }
  } catch (e) {
    return e
  }
}

export default [
  takeEvery(actionsTypes.GET, getTransactions),
]
