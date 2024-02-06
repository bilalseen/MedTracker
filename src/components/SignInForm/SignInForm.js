import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./SignInForm.style";
import { Formik } from "formik";
import AuthInput from "../AuthInput";
import InputBar from "../InputBar";
import CustomButton from "../CustomButton";
import FIREBASE_AUTH from "../../services/config";
import { signInWithEmailAndPassword } from "firebase/auth";

const signInUser = (values) => {
  const auth = FIREBASE_AUTH;
  signInWithEmailAndPassword(auth, values.email, values.password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user.email);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};

const SignInForm = ({
  gap,
  onPress,
  buttonBackgroundColor,
  buttonTextColor,
}) => {
  const onSubmit = (values) => {
    signInUser(values);
  };
  return (
    <Formik initialValues={{ email: "", password: "" }} onSubmit={onSubmit}>
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View style={[styles.inputContainer, { gap: gap }]}>
          <InputBar
            onChange={handleChange("email")}
            onBlur={handleBlur("email")}
            placeholder={"Email "}
            keyboardType={"email-address"}
            backgroundColor={"white"}
            borderColor={"#EFEFEF"}
          />
          <AuthInput
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            placeholder={"Password"}
            secureTextEntry={true}
            backgroundColor={"white"}
            borderColor={"#EFEFEF"}
          />
          <TouchableOpacity onPress={onPress}>
            <Text style={styles.passwordForgotText}>Forgot password?</Text>
          </TouchableOpacity>
          <CustomButton
            buttonText={"Sign In"}
            onPress={handleSubmit}
            backgroundColor={buttonBackgroundColor}
            buttonTextColor={buttonTextColor}
            width={240}
            height={50}
          />
        </View>
      )}
    </Formik>
  );
};

export default SignInForm;
