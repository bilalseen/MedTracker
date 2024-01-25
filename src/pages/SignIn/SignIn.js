import { View, Text, ImageBackground, Image } from "react-native";
import React from "react";
import styles from "./SignIn.style";
import SignInForm from "../../components/SignInForm";
import CustomLine from "../../components/CustomLine";
import GoogleAuthButton from "../../components/GoogleAuthButton";
import RegisterButton from "../../components/RegisterButton";

const SignIn = ({ navigation }) => {
  const navigateToSignUp = () => {
    navigation.navigate("SignUp");
  };
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
          <Text style={styles.headerText}>Welcome back to MedTracker</Text>
          <Text style={styles.titleText}>
            Ready to continue your health journey? Let's log in!
          </Text>
        </View>
        <SignInForm gap={25} />
        <CustomLine
          text={"Or"}
          textColor={"gray"}
          borderColor={"gray"}
          width={250}
        />
        <GoogleAuthButton text={"Sign in"} />
        <RegisterButton
          text={"Don't have an account? Sign Up"}
          onPress={navigateToSignUp}
        />
      </View>
    </ImageBackground>
  );
};

export default SignIn;
