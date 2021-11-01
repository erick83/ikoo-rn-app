import qs from 'qs'
import { AxiosRequestConfig } from "axios"
import { call, takeEvery, put } from "redux-saga/effects"

import { fetchService } from "../../services/fetch"
import { actionsTypes, clearData, setAmount, setComment, setUser } from './actions'
import { IState, ResponseGenerator } from "../../model/reducers.interfaces"
import { getTransactions } from "../transactions/actions"

function* getUserRequest(action: IState) {
  const { email, data, callback } = action.payload
  try {
    const url = '/user?' + qs.stringify({
      userEmail: email
    })

    const resp:ResponseGenerator = yield call(fetchService, url)
    if (resp.status === 200) {
      yield put(setUser(resp.data))
      yield put(setAmount(data.amount))
      yield put(setComment(data.comment))
      yield call(callback, 'DebitP2pConfirm')
    }
  
  } catch (e) {
    return e
  }
}

function* sendPayment(action: IState) {
  const { email, amount, comment, callback } = action.payload
  try {
    const url = '/p2p/send/user'

    const opt: AxiosRequestConfig = {
      method: 'post',
      data: { email, amount, comment }
    }

    const resp:ResponseGenerator = yield call(fetchService, url, opt)

    if (resp.status === 200) {
      yield put(setUser(resp.data))
      yield put(getTransactions())
      yield call(callback, 'Home')
      yield put(clearData())
    }
  } catch (e) {
    return e
  }
}

export default [
  takeEvery(actionsTypes.GET_USER, getUserRequest),
  takeEvery(actionsTypes.SEND_PAYMENT, sendPayment)
]
