import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  buttonContainer: {
    width: 240,
    height: 50,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainerShadow: {
    width: 240,
    height: 50,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 8,
    justifyContent: "center",
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
  text: {
    color: "#fff",
    fontWeight: "bold",
  },
});
