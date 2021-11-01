import { IState } from '../../model/reducers.interfaces'
import { actionsTypes } from './actions'

const initialState = {
  targetUserData: {
    name: '',
    lastname: '',
    email: '',
  },
  amount: 0,
  comment: '',
}

function p2pReducer(state = initialState, action: IState) {
  switch (action.type) {
    case actionsTypes.SET_USER:
      return {
        ...state,
        targetUserData: action.payload
      }
    case actionsTypes.SET_AMOUNT:
      return {
        ...state,
        amount: action.payload
      }
    case actionsTypes.SET_COMMENT:
      return {
        ...state,
        comment: action.payload
      }
    case actionsTypes.CLEAR_DATA:
      return initialState
    default:
      return state
  }
}

export default p2pReducer
