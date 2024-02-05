import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    width: 300,
    height: 70,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderColor: "#EFEFEF",
    borderWidth: 1,
    backgroundColor: "white",
    margin: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 2,
  },
  name: {
    color: "black",
  },
  date: {
    color: "black",
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
