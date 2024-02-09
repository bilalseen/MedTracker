import { View, Text, TouchableOpacity, ToastAndroid } from "react-native";
import React, { useState } from "react";
import styles from "./PasswordReset.style";
import InputBar from "../../components/InputBar";
import CustomButton from "../../components/CustomButton";
import LottieView from "lottie-react-native";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const PasswordReset = ({ navigation }) => {
  const [isdone, setIsDone] = useState(false);
  const [find, setFind] = useState(false);
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);
  const [emailCount, setEmailCount] = useState(0);

  const auth = getAuth();
  const sendResetEmail = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        //email finding animation played
        setFind(true);
        setEmailCount(emailCount + 1);
        const timeout = setTimeout(() => {
          setIsDone(true);
        }, 3000);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(true);

        // ..
      });
  };

  //when emaiCounter is equal to 3 emailCounter set the 0 for 5 minutes after and resend text change to check email text
  if (emailCount == 3) {
    setEmailCount(emailCount + 1);
    const timeout = setTimeout(() => {
      setEmailCount(0);
    }, 300000);
  }

  //navigate to sign in page
  const navigateToSignIn = () => {
    navigation.navigate("SignIn");
  };

  //when password email send the user, isDone variable is true and email send animation loop the full page
  if (isdone) {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.titleText}>Email has been sent!</Text>
          <Text style={styles.descriptionText}>
            Please check your inbox and click in the received link to reset a
            password
          </Text>
        </View>

        <LottieView
          source={require("../../../assets/animation/email-send-animation.json")}
          autoPlay
          style={styles.forgotPasswordAnimation}
        />
        <CustomButton
          onPress={navigateToSignIn}
          buttonText={"Sign In"}
          buttonTextColor={"white"}
          backgroundColor={"#213060"}
          width={200}
          height={50}
          ariaDisabled={email.length > 0 || emailCount >= 3 ? false : true}
        />
        {emailCount <= 3 ? (
          <View style={styles.resendContainer}>
            <Text>Didn't receive the link? </Text>
            <TouchableOpacity
              onPress={() => {
                if (emailCount < 3) {
                  sendResetEmail();
                }
              }}
            >
              <Text style={styles.resendText}>Resend</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.resendWarningContainer}>
            <Text style={styles.reSendWarningText}>
              Please wait before sending any more email reset requests. Please
              check your email inbox.{" "}
            </Text>
          </View>
        )}
      </View>
    );
  }

  if (find) {
    //find animation play only 3 second
    return (
      <LottieView
        source={require("../../../assets/animation/find-people-animation.json")}
        autoPlay
        style={styles.findPeopleAnimation}
      />
    );
  }

  return (
    <View style={styles.container}>
      <LottieView
        source={require("../../../assets/animation/password-forgot-animation.json")}
        autoPlay
        loop
        style={styles.forgotPasswordAnimation}
      />
      <View style={styles.inLineContainer}>
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
            opacity: errorMessage ? 1 : 0,
          }}
        >
          Invalid email address!!
        </Text>
      </View>
      <CustomButton
        onPress={sendResetEmail}
        buttonText={"Send Email"}
        buttonTextColor={email.length > 0 ? "white" : "black"}
        backgroundColor={email.length > 0 ? "#213060" : "gray"}
        width={200}
        height={50}
        ariaDisabled={email.length > 0 ? false : true}
      />
    </View>
  );
};

export default PasswordReset;
