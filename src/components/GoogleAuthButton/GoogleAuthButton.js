import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import styles from "./GoogleAuthButton.style";

const GoogleAuthButton = ({ text }) => {
  return (
    <TouchableOpacity style={styles.buttonContainer}>
      <View style={styles.content}>
        <Image source={require("../../../assets/icons/icon-google.png")} />
        <Text style={styles.text}>{text} with Google</Text>
      </View>
    </TouchableOpacity>
  );
};

export default GoogleAuthButton;
