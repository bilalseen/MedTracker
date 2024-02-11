import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    width: 350,
    height: 250,
    backgroundColor: "white",
    borderRadius: 20,
    gap: 30,
    padding: 35,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textStyle: {
    color: "#213060",
    textAlign: "center",
    fontWeight: "600",
  },
  title: {
    fontSize: 20,
  },
  description: {
    fontSize: 12,
  },
  buttonContainer: {
    flexDirection: "row",
    shadowColor: "#000",
    gap: 30,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  },
  buttonCancel: {
    backgroundColor: "#213060",
  },
  cancelText: {
    color: "white",
    fontWeight: "600",
  },
  buttonConfirm: {
    backgroundColor: "white",
    borderColor: "#e9ecef",
    borderWidth: 1,
  },
  confirmText: {
    fontWeight: "600",
  },
});
