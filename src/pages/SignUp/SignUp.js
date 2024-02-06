import { View, Text, ImageBackground } from "react-native";
import React from "react";
import styles from "./SignUp.style";
import SignUpForm from "../../components/SignUpForm";
import CustomLine from "../../components/CustomLine";
import GoogleAuthButton from "../../components/GoogleAuthButton";
import RegisterButton from "../../components/RegisterButton";
const SignUp = ({ navigation }) => {
  const navigateToSignIn = () => {
    navigation.navigate("SignIn");
  };
  return (
    <ImageBackground
      source={require("../../../assets/background-image-opacity-15.png")}
      style={{ width: "100%", height: "100%" }}
    >
      <View style={styles.container}>
        <View style={styles.header}></View>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Welcome to MedTracker</Text>
          <Text style={styles.titleText}>
            Ready for a healthier you? Let's start now!
          </Text>
        </View>
        <SignUpForm
          gap={25}
          buttonBackgroundColor={"#213060"}
          buttonTextColor={"white"}
        />
        <CustomLine
          text={"Or"}
          textColor={"gray"}
          borderColor={"gray"}
          width={250}
          marginVertical={15}
        />
        <GoogleAuthButton text={"Sign up"} />
        <RegisterButton
          text={"Do you have an account? "}
          linkText={"Sign In"}
          onPress={navigateToSignIn}
          linkColor={"#213060"}
          marginTop={40}
        />
      </View>
    </ImageBackground>
  );
};

export default SignUp;
