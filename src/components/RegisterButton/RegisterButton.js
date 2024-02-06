import {
  TouchableWithoutFeedback,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import styles from "./RegisterButton.style";

const RegisterButton = ({ text, linkText, onPress, marginTop, linkColor }) => {
  return (
    <View style={[styles.container, { marginTop: marginTop }]}>
      <Text>{text} </Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={[styles.registerText, { color: linkColor }]}>
          {linkText}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterButton;
