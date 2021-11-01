import { IAuthStore } from '../../model/auth.interfaces'
import { IState } from '../../model/reducers.interfaces'
import { actionsTypes } from './actions'

const initialState: IAuthStore = {
  isAuthenticated: false,
  userData: null
}

function authReducer(state = initialState, action: IState) {
  switch (action.type) {
    case actionsTypes.LOGIN:
      return {
        isAuthenticated: true,
        userData: action.payload,
      }
    case actionsTypes.LOGOUT:
      return initialState
    default:
      return state
  }
}

export default authReducer
