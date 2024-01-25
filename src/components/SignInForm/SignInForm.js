import React from "react";
import { View } from "react-native";
import styles from "./SignInForm.style";
import { Formik } from "formik";
import AuthInput from "../AuthInput";
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

const SignInForm = ({ gap }) => {
  const onSubmit = (values) => {
    signInUser(values);
  };
  return (
    <Formik initialValues={{ email: "", password: "" }} onSubmit={onSubmit}>
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View style={[styles.inputContainer, { gap: gap }]}>
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
            buttonText={"Sign In"}
            onPress={handleSubmit}
            backgroundColor="green"
          />
        </View>
      )}
    </Formik>
  );
};

export default SignInForm;
