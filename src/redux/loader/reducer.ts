import { IState } from '../../model/reducers.interfaces'
import { actionsTypes } from './actions'

const initialState = {
  active: false
}

function loaderReducer(state = initialState, action: IState) {
  switch (action.type) {
    case actionsTypes.START:
      return {
        active: true,
      }
    case actionsTypes.END:
      return initialState
    default:
      return state
  }
}

export default loaderReducer
