import { View, ImageBackground } from "react-native";
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
