import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    width: 300,
    height: 70,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    backgroundColor: "green",
    margin: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    color: "white",
  },
  date: {
    color: "#fff",
    fontWeight: "bold",
  },
  deleteButtonContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  deleteButton: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    width: 50,
    height: 50,
  },
});
