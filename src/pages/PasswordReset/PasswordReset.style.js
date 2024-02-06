import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 50,
  },
  forgotPasswordAnimation: {
    width: 300,
    height: 300,
    zIndex: 1,
  },
  findPeopleAnimation: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerContainer: {
    alignItems: "flex-start",
    gap: 10,
  },
  titleText: {
    fontSize: 30,
    fontWeight: "600",
    width: 200,
    color: "#213060",
  },
  descriptionText: {
    fontSize: 18,
    width: 300,
    color: "#213060",
  },
  passwordResetText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#2F2E41",
  },
  resendContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  resendText: { color: "#213060", fontWeight: "600" },
});
