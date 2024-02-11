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
  fontWeight,
  ariaDisabled,
  buttonTextColor,
  shadowVisible,
}) => {
  return (
    <TouchableOpacity
      aria-disabled={ariaDisabled}
      onPress={onPress}
      style={[
        shadowVisible ? styles.buttonContainerShadow : styles.buttonContainer,
        { backgroundColor: backgroundColor, width: width, height: height },
      ]}
    >
      <Text
        style={[
          styles.text,
          {
            fontSize: fontSize,
            fontWeight: fontWeight,
            color: buttonTextColor,
          },
        ]}
      >
        {buttonText}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
