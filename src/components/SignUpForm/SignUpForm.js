import { View, Text } from "react-native";
import React from "react";
import styles from "./SignUpForm.style";
import { Formik } from "formik";
import AuthInput from "../AuthInput";
import CustomButton from "../CustomButton";
import FIREBASE_AUTH from "../../services/config";
import { createUserWithEmailAndPassword } from "firebase/auth";

const signUpUser = (values) => {
  const auth = FIREBASE_AUTH;
  createUserWithEmailAndPassword(auth, values.email, values.password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      user.displayName = values.fullName;
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
};
const SignUpForm = ({ gap }) => {
  const onSubmit = (values) => {
    signUpUser(values);
  };
  return (
    <Formik
      initialValues={{ fullName: "", email: "", password: "" }}
      onSubmit={onSubmit}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View style={[styles.inputContainer, { gap: gap }]}>
          <AuthInput
            onChangeText={handleChange("fullName")}
            onBlur={handleBlur("fullName")}
            value={values.firstName}
            placeholder={"Full Name"}
          />
          <AuthInput
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
            value={values.email}
            placeholder={"Email "}
            keyboardType={"email-address"}
          />
          <AuthInput
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            value={values.password}
            placeholder={"Password"}
            secureTextEntry={true}
          />
          <CustomButton
            buttonText={"Sign Up"}
            onPress={handleSubmit}
            backgroundColor="green"
          />
        </View>
      )}
    </Formik>
  );
};

export default SignUpForm;
