import { View, Text } from "react-native";
import React from "react";
import styles from "./SignUpForm.style";
import { Formik } from "formik";
import AuthInput from "../AuthInput";
import CustomButton from "../CustomButton";
const SignUpForm = ({ gap }) => {
  return (
    <Formik
      initialValues={{ fullName: "", email: "", password: "" }}
      onSubmit={() => null}
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
