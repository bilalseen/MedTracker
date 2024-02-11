import React, { useEffect, useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";

const ConfirmationPopup = ({
  isAlertHide,
  closePopUp,
  deleteMedicine,
  titleText,
  descriptionText,
  cancelText,
  confirmText,
  item,
}) => {
  const [count, setCount] = useState(5);

  if (isAlertHide) {
    if (count > 0) {
      const timeout = setTimeout(() => {
        setCount(count - 1);
      }, 1000);
    }
  }

  useEffect(() => {
    setCount(5);
    console.log("counter");
  }, [isAlertHide]);

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isAlertHide}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={[styles.title, styles.textStyle]}>{titleText}</Text>
            <Text style={[styles.description, styles.textStyle]}>
              {descriptionText}
            </Text>
            <View style={[styles.buttonContainer, styles.textStyle]}>
              <Pressable
                style={[styles.button, styles.buttonCancel]}
                onPress={() => {
                  closePopUp();
                  setCount(5);
                }}
              >
                <Text style={styles.cancelText}>{cancelText}</Text>
              </Pressable>
              <Pressable
                style={[
                  styles.button,
                  styles.buttonConfirm,
                  {
                    backgroundColor: count == 0 ? "white" : "gray",
                    borderColor: count == 0 ? "red" : "gray",
                  },
                ]}
                onPress={() => {
                  closePopUp();
                  deleteMedicine();
                  setCount(5);
                }}
                disabled={count == 0 ? false : true}
              >
                <Text
                  style={[
                    styles.confirmText,
                    { color: count == 0 ? "red" : "white" },
                  ]}
                >
                  {count == 0 ? confirmText : `${confirmText} (${count})`}
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default ConfirmationPopup;
