import { View, Text } from "react-native";
import React from "react";
import styles from "./CustomLine.style";

const CustomLine = ({ text, textColor, borderColor, width }) => {
  return (
    <View style={[styles.container, { width: width }]}>
      <View style={[styles.line, { borderColor: borderColor }]} />
      <Text style={[styles.text, { color: textColor }]}>{text}</Text>
      <View style={[styles.line, { borderColor: borderColor }]} />
    </View>
  );
};

export default CustomLine;
