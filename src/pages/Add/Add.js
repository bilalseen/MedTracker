import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import moment from "moment";

import styles from "./Add.style";

import InputBar from "../../components/InputBar";
import CustomCalendar from "../../components/CustomCalendar";
import CustomButton from "../../components/CustomButton";

const Add = () => {
  const [buttonColor, setButtonColor] = useState("gray");
  const [inputText, setInputText] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const today = moment();

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

  return (
    <View style={styles.container}>
      <InputBar
        placeholder={"Medicine name"}
        onChange={(text) => setInputText(text)}
      />
      <CustomCalendar onDateChange={handleDateChange} />
      <CustomButton
        buttonText={"Save"}
        backgroundColor={buttonColor}
        onPress={() => {
          console.log("Save button pressed");
        }}
      />
    </View>
  );
};

export default Add;
