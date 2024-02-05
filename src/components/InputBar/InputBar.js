import React from "react";
import { View, Text, TextInput } from "react-native";
import styles from "./InputBar.style";

const InputBar = ({
  placeholder,
  onChange,
  value,
  backgroundColor,
  color,
  borderColor,
  keyboardType,
}) => {
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: backgroundColor, borderColor: borderColor },
      ]}
    >
      <TextInput
        placeholder={placeholder}
        onChangeText={onChange}
        value={value}
        style={[styles.input, { color: color }]}
        keyboardType={keyboardType}
      />
    </View>
  );
};

export default InputBar;
