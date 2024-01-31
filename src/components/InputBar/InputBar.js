import React from "react";
import { View, Text, TextInput } from "react-native";
import styles from "./InputBar.style";

const SearchBar = ({
  placeholder,
  onChange,
  value,
  backgroundColor,
  color,
}) => {
  return (
    <View style={[styles.container, { backgroundColor: backgroundColor }]}>
      <TextInput
        placeholder={placeholder}
        onChangeText={onChange}
        value={value}
        style={[styles.input, { color: color }]}
      />
    </View>
  );
};

export default SearchBar;
