import React from "react";
import { View, Text, TextInput } from "react-native";
import styles from "./InputBar.style";

const SearchBar = ({ placeholder, onChange }) => {
  return (
    <View style={styles.container}>
      <TextInput placeholder={placeholder} onChangeText={onChange} />
    </View>
  );
};

export default SearchBar;
