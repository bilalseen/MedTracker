import { View, Text } from "react-native";
import React, { useState } from "react";
import styles from "./DetailMedicine.style";
import { db, doc, deleteDoc } from "../../services/dbConfig";
import FIREBASE_AUTH from "../../services/config";
import { onAuthStateChanged } from "@firebase/auth";

import CustomButton from "../../components/CustomButton";
import QRCodePopup from "../../components/QRCodePopup";
import ConfirmationPopup from "../../components/ConfirmationPopup";

const DetailMedicine = ({ route, navigation }) => {
  const { item } = route.params;
  const [user, setUser] = useState(null);
  const [QrCodePopupVisible, setQrCodePopupVisible] = useState(false);
  const [confirmationPopupVisible, setConfirmationPopupVisible] =
    useState(false);

  onAuthStateChanged(FIREBASE_AUTH, (authUser) => {
    setUser(authUser);
  });

  const deleteMedicine = async (item) => {
    try {
      await deleteDoc(doc(db, user.uid, item.id));
      navigateToHome();
    } catch (err) {
      console.log("İlaç silme hatası: " + err);
    }
  };

  const navigateToHome = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <View style={styles.inLineContainer}>
        <Text style={styles.title}>Medicine Information</Text>
        <View style={styles.medicineContainer}>
          <Text style={styles.informationText}>Name: {item.name}</Text>
          <Text style={styles.informationText}>Expire Date: {item.date}</Text>
          <Text style={styles.informationText}>Barcode: {item.barcode}</Text>
          {item.medInfo ? (
            <Text style={styles.informationText}>Med Info: {item.medInfo}</Text>
          ) : null}
          {item.note ? (
            <Text style={styles.informationText}>Notes: {item.note}</Text>
          ) : null}
          <Text style={styles.informationText}>
            Validity Time: {item.validityTime} day
          </Text>
        </View>
        <CustomButton
          buttonText={"View QR Code"}
          onPress={() => setQrCodePopupVisible(true)}
          width={200}
          height={50}
          fontSize={16}
          fontWeight={"400"}
          ariaDisabled={false}
          buttonTextColor={"#1971c2"}
          shadowVisible={false}
        />
      </View>
      <CustomButton
        buttonText={"Delete Medicine"}
        onPress={() => setConfirmationPopupVisible(true)}
        width={200}
        height={50}
        fontSize={16}
        fontWeight={"400"}
        ariaDisabled={false}
        buttonTextColor={"#e03131"}
        shadowVisible={false}
      />
      <QRCodePopup
        popupVisible={QrCodePopupVisible}
        closePopup={() => setQrCodePopupVisible(false)}
        medicineId={item.id}
      />
      <ConfirmationPopup
        isAlertHide={confirmationPopupVisible}
        closePopUp={() => setConfirmationPopupVisible(false)}
        deleteMedicine={() => deleteMedicine(item)}
        item={item}
        titleText={"Delete Medication"}
        descriptionText={`Are you sure you want to delete this medication? This action cannot be undone.`}
        cancelText={"Cancel"}
        confirmText={"Delete Medicine"}
      />
    </View>
  );
};

export default DetailMedicine;
