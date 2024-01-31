import { StyleSheet, Dimensions } from "react-native";

const deviceSize = Dimensions.get("window");

export default styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
    width: (deviceSize.width / 10) * 8,
    height: deviceSize.width / 7,
    paddingVertical: 10,
    marginVertical: 5,
  },
  inlineContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F4F7FF",
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {},
  titleText: {
    fontWeight: "700",
  },
  descriptionText: {
    fontSize: 10,
    color: "gray",
  },
  arrowIcon: {
    justifyContent: "flex-end",
  },
});
