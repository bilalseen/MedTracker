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
  ariaDisabled,
  buttonTextColor,
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
      <Text
        style={[styles.text, { fontSize: fontSize, color: buttonTextColor }]}
      >
        {buttonText}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
