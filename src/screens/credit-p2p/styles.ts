import { StyleSheet } from "react-native";
import colors from "../../global-styles/colors";

export default StyleSheet.create({
  container: {
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    color: colors.blue,
    fontSize: 24,
    fontWeight: 'bold',
    padding: 20,
    paddingBottom: 0,
    textAlign: 'center',
  },
  qrContainer: {
    display: 'flex',
    marginTop: 10,
    marginBottom: 10,
  },
  email: {
    color: colors.black,
    fontSize: 28,
    fontWeight: 'bold',
    paddingBottom: 20,
    textAlign: 'center',
    marginTop: 0,
  }
})