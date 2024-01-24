import { TouchableWithoutFeedback, Text } from "react-native";
import React from "react";
import styles from "./RegisterButton.style";

const RegisterButton = ({ text }) => {
  return (
    <TouchableWithoutFeedback>
      <Text style={styles.registerText}>{text}</Text>
    </TouchableWithoutFeedback>
  );
};

export default RegisterButton;
