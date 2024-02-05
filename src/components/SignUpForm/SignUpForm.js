import { View, Text } from "react-native";
import React from "react";
import styles from "./SignUpForm.style";
import { Formik } from "formik";
import AuthInput from "../AuthInput";
import InputBar from "../InputBar";
import CustomButton from "../CustomButton";
import FIREBASE_AUTH from "../../services/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const signUpUser = (values) => {
  const auth = FIREBASE_AUTH;
  createUserWithEmailAndPassword(auth, values.email, values.password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      console.log(user.displayName);
      updateProfileAndLog(user, values);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // Handle error
    });
};

const updateProfileAndLog = async (user, values) => {
  try {
    await updateProfile(user, {
      displayName: values.fullName,
    });
    console.log("Profil güncellendi:", user.displayName);
  } catch (error) {
    console.error("Profil güncelleme hatası:", error.message);
  }
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
          <InputBar
            onChange={handleChange("fullName")}
            onBlur={handleBlur("fullName")}
            value={values.firstName}
            placeholder={"Full Name"}
            backgroundColor={"white"}
            borderColor={"#EFEFEF"}
          />
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
          <CustomButton
            buttonText={"Sign Up"}
            onPress={handleSubmit}
            backgroundColor="green"
            width={240}
            height={50}
          />
        </View>
      )}
    </Formik>
  );
};

export default SignUpForm;
