import { StyleSheet } from "react-native";
import colors from "../../global-styles/colors";

export default StyleSheet.create({
  container: {
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  buttonsContainer: {
    marginTop: 10,
    marginBottom: 5,
  },

  buttonHome: {
    backgroundColor: colors.darkblue,
    color: colors.white,
    paddingLeft: 12,
    paddingRight: 12,
  },

  qrIcon: {
    marginRight: 5,
  },

  title: {
    marginTop: 26,
    textAlign: 'center',
    fontSize: 28,
    marginBottom: 20,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color: colors.blue,
  },

  input: {
    width: 320,
    margin: 12,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: colors.ligthgray,
    paddingLeft: 20,
    paddingRight: 20,
  },

  buttosWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
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

  buttonDisabledNext: {
    backgroundColor: colors.ligthgray,
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
