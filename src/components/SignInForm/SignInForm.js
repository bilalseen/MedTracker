import React from "react";
import { View } from "react-native";
import styles from "./SignInForm.style";
import { Formik } from "formik";
import AuthInput from "../AuthInput";
import CustomButton from "../CustomButton";

const SignInForm = ({ gap }) => {
  return (
    <Formik initialValues={{ email: "", password: "" }} onSubmit={() => null}>
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
