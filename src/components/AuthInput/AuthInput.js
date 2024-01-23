import { SafeAreaView, Text, TextInput } from "react-native";
import React from "react";
import styles from "./AuthInput.style";

const AuthInput = ({
  placeholder,
  onChangeText,
  keyboardType,
  secureTextEntry,
}) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
    />
  );
};

export default AuthInput;
