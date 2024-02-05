import { View, ToastAndroid } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./EditMedicine.style";
import moment from "moment";
import {
  db,
  collection,
  getDoc,
  doc,
  deleteDoc,
  updateDoc,
} from "../../services/dbConfig";
import FIREBASE_AUTH from "../../services/config";
import { onAuthStateChanged } from "@firebase/auth";
import LoadingAnimation from "../../components/LoadingAnimation";
import ErrorAnimation from "../../components/ErrorAnimation";
import InputBar from "../../components/InputBar";
import CustomCalendar from "../../components/CustomCalendar";
import CustomButton from "../../components/CustomButton";

const EditMedicine = ({ route, navigation }) => {
  const { item } = route.params;

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [buttonColor, setButtonColor] = useState("orange");
  const [inputText, setInputText] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const today = moment();

  onAuthStateChanged(FIREBASE_AUTH, (authUser) => {
    setUser(authUser);
  });

  useEffect(() => {
    if (user) {
      getMedicineDetails();
    }
  }, [user]);

  const getMedicineDetails = async () => {
    try {
      setError(false);
      const docRef = doc(db, user.uid, item.id);
      const docSnap = await getDoc(docRef);
      setInputText(item.name);
      setSelectedDate(item.date);
      setLoading(false);
      if (!docSnap.exists()) {
        setError(true);
        ToastAndroid.show("No such document!", ToastAndroid.SHORT);
      }
    } catch (error) {
      setError(true);
      ToastAndroid.show(`Hata: ${error}`, ToastAndroid.SHORT);
    }
  };

  const updateMedicine = async () => {
    const medicineRef = doc(db, user.uid, item.id);

    try {
      setError(false);
      await updateDoc(medicineRef, {
        name: inputText,
        date: selectedDate,
        outOfDate: false,
      });
      navigateToHome();
      ToastAndroid.show("Medicine update successfull!", ToastAndroid.SHORT);
    } catch (error) {
      setError(true);
      ToastAndroid.show(`Hata: ${error}`, ToastAndroid.SHORT);
    }
  };

  const handleDateChange = (date) => {
    const formattedDate = moment(date).format("YYYY-MM-DD").toString();
    setSelectedDate(formattedDate);
  };

  if (loading) {
    return <LoadingAnimation />;
  }

  if (error) {
    return <ErrorAnimation />;
  }

  const navigateToHome = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <InputBar
        placeholder={"Medicine name"}
        onChange={(text) => setInputText(text)}
        value={inputText}
        backgroundColor={"white"}
        borderColor={"#EFEFEF"}
      />
      <View style={styles.calendarContainer}>
        <CustomCalendar
          onDateChange={handleDateChange}
          selectedDate={selectedDate}
          today={today}
          width={350}
          height={350}
          selectedStartDate={selectedDate}
        />
      </View>
      <CustomButton
        buttonText={"Update"}
        backgroundColor={buttonColor}
        color={buttonColor == "orange" ? "white" : "black"}
        ariaDisabled={buttonColor == "orange" ? false : true}
        onPress={updateMedicine}
        width={240}
        height={50}
      />
    </View>
  );
};

export default EditMedicine;
