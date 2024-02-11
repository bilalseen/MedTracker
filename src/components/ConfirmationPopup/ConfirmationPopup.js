import React, { useEffect, useState } from "react";
import { Modal, Text, Pressable, View } from "react-native";
import styles from "./ConfirmationPopup.style";

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
  }, [isAlertHide]);

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={isAlertHide}
        onRequestClose={closePopUp}
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
                    borderColor: count == 0 ? "#e03131" : "gray",
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
                    { color: count == 0 ? "#e03131" : "white" },
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

export default ConfirmationPopup;
