import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  buttonContainer: {
    width: 240,
    backgroundColor: "white",
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  text: {
    fontWeight: "bold",
  },
});
