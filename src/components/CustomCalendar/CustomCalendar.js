import { View, Text } from "react-native";
import React, { useState } from "react";
import styles from "./CustomCalendar.style";
import CalendarPicker from "react-native-calendar-picker";

const CustomCalendar = ({onDateChange}) => {
 

  return (
    <View style={styles.container}>
      <CalendarPicker
        onDateChange={onDateChange}
        selectedDayColor={selectedDate ? "blue" : undefined}
        firstDay={1}
        width={350}
        height={350}
        minDate={today}
      />
    </View>
  );
};

export default CustomCalendar;
