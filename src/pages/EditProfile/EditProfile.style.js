import { StyleSheet, Dimensions } from "react-native";

const deviceSize = Dimensions.get("window");

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  profileContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  profileImageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#E2E3E5",
    alignItems: "center",
    justifyContent: "center",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  inputContainer: {
    gap: 30,
    marginTop: 50,
    paddingVertical: 50,
    backgroundColor: "white",
    alignItems: "center",
    width: (deviceSize.width / 10) * 9,
    borderRadius: 20,
  },
  titleText: {
    fontSize: 20,
    color: "gray",
    paddingVertical: 10,
  },
  buttonContainer: {
    marginTop: 70,
  },
});
