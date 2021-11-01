import { AxiosRequestConfig } from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { IState, ResponseGenerator } from "../../model/reducers.interfaces";
import { fetchService } from "../../services/fetch";
import { loaderEnd } from "../loader/actions";
import { actionsTypes, login, logout } from './actions'

function * loginRequest(action:IState) {
  try {
    const opt: AxiosRequestConfig = {
      method: 'post',
      data: action.payload
    }

    const resp:ResponseGenerator = yield call(fetchService, '/auth/login', opt)
    if (resp.status === 200) {
      const user:ResponseGenerator = yield call(fetchService, '/auth/user')
      yield put(login(user.data))
    }
    yield put(loaderEnd())
  } catch (e) {
    yield put(loaderEnd())
    console.error(e)
  }
}

function * logoutRequest(action:IState) {
  try {
    const opt: AxiosRequestConfig = {
      method: 'post',
      data: action.payload
    }

    const resp:ResponseGenerator = yield call(fetchService, '/auth/logout', opt)
    if (resp.status === 200) {
      yield put(logout())
    }

  } catch (e) {
    console.error(e)
  }
}

export default [
  takeEvery(actionsTypes.LOGIN_REQUEST, loginRequest),
  takeEvery(actionsTypes.LOGOUT_REQUEST, logoutRequest)
]
