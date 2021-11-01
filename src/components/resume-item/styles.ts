import { StyleSheet } from 'react-native'
import colors from '../../global-styles/colors'

export default StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  email: {
    color: colors.blue,
    fontSize: 18,
  },
  number: {
    color: colors.darkblue,
    fontSize: 20,
  },
  description: {
    color: colors.gray,
    fontSize: 14,
  },
  cant: {
    color: colors.blue,
    fontSize: 26,
  }
})
