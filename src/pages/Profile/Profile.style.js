import { StyleSheet, Dimensions } from "react-native";

const deviceSize = Dimensions.get("window");

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    paddingHorizontal: 30,
    backgroundColor: "#F4F4F4",
  },
  profileContainer: {
    backgroundColor: "white",
    width: (deviceSize.width / 10) * 9,
    flexDirection: "row",
    paddingVertical: 10,
    borderRadius: 20,
    paddingHorizontal: 10,
    gap: 10,
  },
  profileImageContainer: {
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F4F4F4",
    borderRadius: 25
  },
  profileImage: {
    borderRadius: 50,
    width: 75,
    height: 75,
  },
  profileTextContainer: {
    justifyContent: "center",
    gap: 5,
  },
  profileName: {
    fontWeight: "700",
  },
  profileEmail: {
    color: "gray",
  },
  generalContainer: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    borderRadius: 20,
    maxWidth: (deviceSize.width / 10) * 9,
    paddingBottom: 20,
  },
  titleText: {
    fontSize: 20,
    color: "gray",
    paddingVertical: 10,
  },
  preferencesContainer: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    borderRadius: 20,
    maxWidth: (deviceSize.width / 10) * 9,
    paddingBottom: 20,
  },
});
