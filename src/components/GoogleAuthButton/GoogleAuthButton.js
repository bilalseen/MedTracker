import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import styles from "./GoogleAuthButton.style";

const GoogleAuthButton = () => {
  return (
    <TouchableOpacity style={styles.buttonContainer}>
      <View style={styles.content}>
        <Image source={require("../../../assets/icons/icon-google.png")} />
        <Text style={styles.text}>Sign in with Google</Text>
      </View>
    </TouchableOpacity>
  );
};

export default GoogleAuthButton;
