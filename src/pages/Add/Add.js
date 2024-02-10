import { View, ToastAndroid } from "react-native";
import React, { useEffect, useState } from "react";
import moment from "moment";
import { db, collection, addDoc } from "../../services/dbConfig";
import FIREBASE_AUTH from "../../services/config";
import { onAuthStateChanged } from "@firebase/auth";

import styles from "./Add.style";

import InputBar from "../../components/InputBar";
import CustomCalendar from "../../components/CustomCalendar";
import CustomButton from "../../components/CustomButton";
import LoadingAnimation from "../../components/LoadingAnimation";
import AwesomeAlert from "react-native-awesome-alerts";

const Add = () => {
  const [buttonColor, setButtonColor] = useState("gray");
  const [inputText, setInputText] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [loading, setLoading] = useState(false);
  const today = moment();

  const [user, setUser] = useState(null);

  onAuthStateChanged(FIREBASE_AUTH, (authUser) => {
    setUser(authUser);
  });

  const addMedicine = async () => {
    if (user) {
      setLoading(true);
      try {
        const docRef = await addDoc(collection(db, user.uid), {
          name: inputText,
          date: selectedDate,
          outOfDate: false,
        });
        setInputText("");
        setSelectedDate("");
        console.log("Document written with ID: ", docRef.id);
        ToastAndroid.show("Your medicine has been added!", ToastAndroid.SHORT);
        setLoading(false);
      } catch (e) {
        console.error("Error adding document: ", e);
        ToastAndroid.show(e.message, ToastAndroid.SHORT);
      }
    }
  };

  //button background color set
  useEffect(() => {
    inputText.length > 0 && selectedDate.length > 0
      ? setButtonColor("orange")
      : setButtonColor("gray");
  }, [inputText, selectedDate]);

  //calendar select date set process
  const handleDateChange = (date) => {
    const formattedDate = moment(date).format("YYYY-MM-DD").toString();
    setSelectedDate(formattedDate);
  };
  if (loading) {
    return <AwesomeAlert show={loading ? true : false} showProgress={true} />;
  }

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
        buttonText={"Save"}
        backgroundColor={buttonColor}
        color={buttonColor == "orange" ? "white" : "black"}
        ariaDisabled={buttonColor == "orange" ? false : true}
        onPress={addMedicine}
        width={240}
        height={50}
      />
    </View>
  );
};

export default Add;
