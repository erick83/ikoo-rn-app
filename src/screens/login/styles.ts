import { StyleSheet } from 'react-native'
import colors from '../../global-styles/colors'

export default StyleSheet.create({
  loginContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '20%',
    paddingLeft: 20,
    paddingRight: 20,
  },

  inputContainer: {
    width: '100%',
    marginTop: 20,
    backgroundColor: 'transparent',
    borderColor: colors.ligthgray,
    borderWidth: 1,

    shadowColor: 'black',
    borderRadius: 4,
    shadowRadius: 100,
    shadowOpacity: 1,
    shadowOffset: { height: 0, width: 5 }
  },
  
  inputText: {
    backgroundColor: 'transparent',
    marginLeft: 10,
    marginRight: 10,
    fontFamily: 'Roboto',
  },

  buttonContainer: {
    width: '100%',
    marginTop: 30,
  },

  buttonSubmit: {
    width: '100%',
    backgroundColor: colors.darkblue,
    fontFamily: 'Roboto',
  },

  registerContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
  },

  textNewUser: {
    marginTop: 10,
    marginLeft: 10,
    fontFamily: 'Roboto',
    fontSize: 16,
    color: colors.gray,
  },

  buttonNewUser: {
    width: 160,
    backgroundColor: colors.darkblue,
    fontFamily: 'Roboto',
  },

  loader: {
    marginBottom: 16,
  }
})
