import { StyleSheet } from "react-native";
import colors from "../../global-styles/colors";

export default StyleSheet.create({
  scrollView: {
    // backgroundColor: colors.white,
  },
  container: {
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    marginTop: 26,
    textAlign: 'center',
    fontSize: 28,
    marginBottom: 26,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color: colors.blue,
  },

  targetDetails: {
    borderColor: colors.ligthgray,
    borderWidth: 1,
    borderRadius: 6,
    width: 270,
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  userDataContainer: {
    width: 230,
    marginTop: 16,
  },

  userDataText: {
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.gray,
  },

  imageThumb: {
    backgroundColor: colors.ligthgray,
  },

  amountText: {
    marginTop: 26,
    color: colors.blue,
    fontSize: 42,
  },

  buttosWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  buttonsContainer: {
    marginTop: 10,
    marginBottom: 5,
  },

  buttonNext: {
    backgroundColor: colors.green,
    color: colors.white,
    paddingLeft: 12,
    paddingRight: 12,
    marginRight: 20,
    marginTop: 40,
    width: 120,
  },

  buttonBack: {
    backgroundColor: colors.orange,
    color: colors.white,
    paddingLeft: 12,
    paddingRight: 12,
    marginLeft: 20,
    marginTop: 40,
    width: 120,
  },
})
