import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./SignInForm.style";
import { Formik } from "formik";
import AuthInput from "../AuthInput";
import InputBar from "../InputBar";
import CustomButton from "../CustomButton";
import FIREBASE_AUTH from "../../services/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import * as Yup from "yup";

const SignInForm = ({ gap, onPress, buttonBackgroundColor }) => {
  const [firebaseError, setFirebaseError] = useState("");

  const onSubmit = (values, setFieldError) => {
    signInUser(values, setFirebaseError, setFieldError);
  };

  const signInUser = (values, setFirebaseError, setFieldError) => {
    const auth = FIREBASE_AUTH;
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user.email);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setFirebaseError(error.code);
        // Hata oluştuğunda ilgili alanın 'touched' durumunu set etmek için setFieldTouched kullanılmalı
        setFieldError("email", true);
        setFieldError("password", true);
      });
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={onSubmit}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email("Geçerli bir e-posta giriniz")
          .required("E-posta alanı boş bırakılamaz"),
        password: Yup.string()
          .min(6, "Şifreniz en az 6 karakter olmalıdır")
          .required("Şifre alanı boş bırakılamaz"),
      })}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
        setFieldTouched,
        setFieldError, // Formik 2.x sürümünde setFieldError da kullanılabilir
      }) => (
        <View style={[styles.inputContainer, { gap: gap }]}>
          <View>
            <InputBar
              onChange={handleChange("email")}
              onBlur={() => {
                handleBlur("email");
                setFieldTouched("email", true); // Hata olduğunda touched durumunu set et
              }}
              placeholder={"Email "}
              keyboardType={"email-address"}
              backgroundColor={"white"}
              borderColor={touched.email && errors.email ? "red" : "#EFEFEF"}
            />
            {touched.email && errors.email ? (
              <Text style={styles.warningText}>{errors.email}</Text>
            ) : null}
          </View>
          <View>
            <AuthInput
              onChangeText={(text) => {
                handleChange("password")(text);
                setFirebaseError("");
              }}
              onBlur={() => {
                handleBlur("password");
                setFieldTouched("password", true); // Hata olduğunda touched durumunu set et
              }}
              placeholder={"Password"}
              secureTextEntry={true}
              backgroundColor={"white"}
              borderColor={
                (touched.password && errors.password) ||
                firebaseError.length > 0
                  ? "red"
                  : "#EFEFEF"
              }
            />
            {touched.password && errors.password ? (
              <Text style={styles.warningText}>{errors.password}</Text>
            ) : null}

            {firebaseError ? (
              <Text style={styles.warningText}>{firebaseError}</Text>
            ) : null}
          </View>

          <TouchableOpacity onPress={onPress}>
            <Text style={styles.passwordForgotText}>Forgot password?</Text>
          </TouchableOpacity>
          <CustomButton
            buttonText={"Sign In"}
            onPress={handleSubmit}
            backgroundColor={buttonBackgroundColor}
            buttonTextColor={"white"}
            width={240}
            height={50}
          />
        </View>
      )}
    </Formik>
  );
};

export default SignInForm;
