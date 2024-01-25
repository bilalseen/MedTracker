import { TouchableWithoutFeedback, Text } from "react-native";
import React from "react";
import styles from "./RegisterButton.style";

const RegisterButton = ({ text, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Text style={styles.registerText}>{text}</Text>
    </TouchableWithoutFeedback>
  );
};

export default RegisterButton;
