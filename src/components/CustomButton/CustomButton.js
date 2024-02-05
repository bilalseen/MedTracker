import { Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "./CustomButton.style";

const CustomButton = ({
  buttonText,
  backgroundColor,
  onPress,
  width,
  height,
  fontSize,
  color,
  ariaDisabled,
}) => {
  return (
    <TouchableOpacity
      aria-disabled={ariaDisabled}
      onPress={onPress}
      style={[
        styles.buttonContainer,
        { backgroundColor: backgroundColor, width: width, height: height },
      ]}
    >
      <Text style={[styles.text, { fontSize: fontSize, color: color }]}>
        {buttonText}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
