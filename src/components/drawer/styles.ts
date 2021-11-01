import { StyleSheet } from 'react-native'
import colors from '../../global-styles/colors'

export default StyleSheet.create({
  bar: {
    height: 80,
  },

  menuContainer: {
    padding: 20,
    display: 'flex',
    justifyContent: 'center',
  },

  menuTitle: {
    marginTop: 26,
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 5,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color: colors.blue,
  },

  buttonsContainer: {
    marginTop: 10,
    marginBottom: 5,
  },

  buttonHome: {
    backgroundColor: colors.darkblue,
    color: colors.white,
  },
  
  buttonAdd: {
    backgroundColor: colors.green,
    color: colors.white,
  },
  
  buttonMinus: {
    backgroundColor: colors.orange,
    color: colors.white,
  },

  buttonIcon: {
    paddingRight: 6,
  },

  rightButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginRight: 10,
  },

  logoutButtonContainer: {
    marginTop: 40,
    alignSelf: 'flex-end'
  },

  buttonLogout: {
    backgroundColor: colors.darkgray,
    color: colors.white,
  },

})