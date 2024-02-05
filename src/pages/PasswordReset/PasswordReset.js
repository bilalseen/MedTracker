import { View, Text, TouchableOpacity, ToastAndroid } from "react-native";
import React, { useState } from "react";
import styles from "./PasswordReset.style";
import InputBar from "../../components/InputBar";
import CustomButton from "../../components/CustomButton";
import LottieView from "lottie-react-native";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const PasswordReset = ({ navigation }) => {
  const [isdone, setIsDone] = useState(false);
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);

  const auth = getAuth();
  const sendResetEmail = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        //email send animation played
        setIsDone(true);
        // 3 seconds after out the password reset page and gback to sign in page
        const timeout = setTimeout(() => {
          navigateToSignIn();
        }, 3000);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(true);
        console.log(error.message);
        console.log(email);
        // ..
      });
  };

  //when password email send the user, isDone variable is true and email send animation loop the full page
  if (isdone) {
    return (
      <LottieView
        source={require("../../../assets/animation/email-send-animation.json")}
        autoPlay
        loop
      />
    );
  }

  //navigate to sign in page
  const navigateToSignIn = () => {
    navigation.navigate("SignIn");
  };

  return (
    <View style={styles.container}>
      <LottieView
        source={require("../../../assets/animation/password-forgot-animation.json")}
        autoPlay
        loop
        style={styles.forgotPasswordAnimation}
      />
      <View>
        <InputBar
          placeholder={"Enter email address"}
          onChange={(text) => {
            setEmail(text);
            setErrorMessage(false);
          }}
          keyboardType={"email-address"}
          backgroundColor={"white"}
          borderColor={errorMessage ? "red" : "#EFEFEF"}
        />
        <Text
          style={{
            color: "red",
            marginTop: 10,
            marginLeft: 10,
            display: errorMessage ? "hidden" : "none",
          }}
        >
          Invalid email address!! Please try again
        </Text>
      </View>
      <CustomButton
        onPress={sendResetEmail}
        buttonText={"Send Email"}
        color={email.length > 0 ? "white" : "gray"}
        backgroundColor={"#2D2D2D"}
        width={200}
        height={50}
        ariaDisabled={email.length > 0 ? false : true}
      />
    </View>
  );
};

export default PasswordReset;
