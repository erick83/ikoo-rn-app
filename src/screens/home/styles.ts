import { StyleSheet } from 'react-native'
import colors from '../../global-styles/colors'

export default StyleSheet.create({
  profileContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 40,
    paddingLeft: 50,
    paddingRight: 50,
    paddingBottom: 20,
  },
  profileName: {
    color: colors.blue,
    fontSize: 24,
    fontWeight: 'bold',
  },
  balanceText: {
    color: colors.darkgray,
    fontSize: 12,
    marginTop: 5,
  },
  balance: {
    color: colors.blue,
    fontSize: 30,
    fontWeight: 'bold',
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: 30,
  },
  buttonIcon: {
    paddingRight: 6,
  },
  addButton: {
    backgroundColor: colors.green,
    paddingRight: 16,
    paddingLeft: 8,
    width: 140,
  },
  removeButton: {
    backgroundColor: colors.orange,
    paddingRight: 16,
    paddingLeft: 8,
    width: 140,
  },
  resumeContainer: {
    margin: 20,
    paddingTop: 10,
    paddingBottom: 20,
  },
  resumeTitle: {
    color: colors.blue,
    fontSize: 22,
    marginTop: 20,
    fontWeight: 'bold',
  }
})
