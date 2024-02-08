import { StyleSheet, Dimensions } from "react-native";

const deviceSize = Dimensions.get("window");

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 100,
  },
  profileContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  profileImage: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#E2E3E5",
    borderRadius: 50,
    width: 100,
    height: 100,
  },
  informationContainer: {
    width: (deviceSize.width / 10) * 9,
    height: (deviceSize.height / 10) * 3,
    paddingVertical: 50,
    paddingHorizontal: 50,
    backgroundColor: "white",
    borderRadius: 20,
    gap: 30,
    justifyContent: "center",
  },
  emailcontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  informationText: {
    fontWeight: "600",
    color: "gray",
  },
});
