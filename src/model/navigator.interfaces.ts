import { StackNavigationProp } from '@react-navigation/stack'

export type NavigatorStackParams = {
  Login: undefined
  Home: undefined
  CreditP2P: undefined
  DebitP2pConfirm: undefined
}

export type StackNavigator = StackNavigationProp<NavigatorStackParams, 'Login'>
