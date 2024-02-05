import { View, Text } from "react-native";
import React, { useState } from "react";
import styles from "./CustomCalendar.style";
import CalendarPicker from "react-native-calendar-picker";

const CustomCalendar = ({
  onDateChange,
  selectedDate,
  today,
  width,
  height,
  selectedStartDate,
}) => {
  return (
    <View style={styles.container}>
      <CalendarPicker
        onDateChange={onDateChange}
        selectedDayColor={selectedDate ? "green" : undefined}
        firstDay={1}
        width={width}
        height={height}
        minDate={today}
        selectedStartDate={selectedStartDate}
      />
    </View>
  );
};

export default CustomCalendar;
