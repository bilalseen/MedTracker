import { View, Text, TextInput } from "react-native";
import React from "react";
import styles from "./SearchBar.style";

const SearchBar = ({ placeholder, onSearch }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      onChangeText={onSearch}
    />
  );
};

export default SearchBar;
