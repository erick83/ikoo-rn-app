import { StyleSheet } from 'react-native'
import colors from '../../global-styles/colors'

export default StyleSheet.create({
  centeredView: {
    flex: 1,
    marginTop: 50,
  },
  modalView: {
    marginLeft: 80,
    backgroundColor: "white",
    borderRadius: 4,
    padding: 20,
    alignItems: "center",
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  title: {
    marginTop: 5,
    fontSize: 22,
    color: colors.blue,
    fontWeight: 'bold',
  },
  descrption: {
    marginTop: 5,
    fontSize: 16,
    color: colors.darkgray,
  },
  descrptionSpan: {
    fontSize: 18,
    color: colors.blue,
    fontWeight: 'bold',
  },
  newBalance: {
    marginTop: 5,
    fontSize: 18,
    color: colors.darkgray,
  },
  newBalanceAmount: {
    fontSize: 26,
    color: colors.blue,
    fontWeight: 'bold',
  },
  buttonsClose: {
    marginTop: 10,
    marginBottom: 5,
    alignSelf: "flex-end"
  },
  buttonDefault: {
    backgroundColor: colors.darkblue,
    color: colors.white,
  }
})
