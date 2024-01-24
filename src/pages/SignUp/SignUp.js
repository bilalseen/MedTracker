import { View, Text, ImageBackground, Image } from "react-native";
import React from "react";
import styles from "./SignUp.style";
import SignUpForm from "../../components/SignUpForm";
import CustomLine from "../../components/CustomLine";
import GoogleAuthButton from "../../components/GoogleAuthButton";
const SignUp = () => {
  return (
    <ImageBackground
      source={require("../../../assets/background-image-opacity-15.png")}
      style={{ width: "100%", height: "100%" }}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.icon}
            source={require("../../../assets/icons/icon.png")}
          />
          <Text style={styles.headerText}>Welcome to MedTracker</Text>
          <Text style={styles.titleText}>
            If you're ready for this travel. Let's go
          </Text>
        </View>
        <SignUpForm gap={25} />
        <CustomLine
          text={"Or"}
          textColor={"gray"}
          borderColor={"gray"}
          width={300}
        />
        <GoogleAuthButton />
      </View>
    </ImageBackground>
  );
};

export default SignUp;
