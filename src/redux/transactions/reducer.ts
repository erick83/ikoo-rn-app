import { actionsTypes } from './actions'
import { IState, ITransactionData } from '../../model/reducers.interfaces'

const initialState:ITransactionData[] = []

function transactionsReducer(state = initialState, action: IState) {
  switch (action.type) {
    case actionsTypes.SET:
      return action.payload
    default:
      return state
  }
}

export default transactionsReducer
