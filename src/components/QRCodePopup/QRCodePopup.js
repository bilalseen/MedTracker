import React from "react";
import { Modal, View, Text } from "react-native";
import styles from "./QRCodePopup.style";
import CustomButton from "../../components/CustomButton";
import QRCode from "react-native-qrcode-svg";

const QRCodePopup = ({ popupVisible, closePopup, medicineId }) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={popupVisible}
        onRequestClose={closePopup}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.title}>Medicine QR Code</Text>
            <QRCode value={medicineId} size={250} />
            <CustomButton
              buttonText={"Close"}
              onPress={closePopup}
              width={200}
              height={50}
              fontSize={16}
              fontWeight={"400"}
              ariaDisabled={false}
              buttonTextColor={"#e03131"}
              shadowColor={false}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default QRCodePopup;
