import { View, Text } from "react-native";
import React, { useState } from "react";
import styles from "./SignUpForm.style";
import { Formik } from "formik";
import AuthInput from "../AuthInput";
import InputBar from "../InputBar";
import CustomButton from "../CustomButton";
import FIREBASE_AUTH from "../../services/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import * as Yup from "yup";
import { db, collection, addDoc } from "../../services/dbConfig";

const SignUpForm = ({ gap, buttonBackgroundColor, buttonTextColor }) => {
  const [firebaseError, setFirebaseError] = useState("");

  const onSubmit = (values) => {
    signUpUser(values);
  };
  const signUpUser = (values) => {
    const auth = FIREBASE_AUTH;
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user.displayName);
        updateProfileAndLog(user, values);
        addUserToFirestore(user, values);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setFirebaseError(error.code);

        console.log(error.code);
        console.log(error.message);
        // Handle error
      });
  };

  const addUserToFirestore = async (userId, values) => {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        name: values.fullName,
        email: values.email,
        uid: userId,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error(
        "Firestore'a kullanıcı eklenirken bir hata oluştu:",
        e.message
      );
    }
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

  return (
    <Formik
      initialValues={{ fullName: "", email: "", password: "" }}
      onSubmit={onSubmit}
      validationSchema={Yup.object().shape({
        fullName: Yup.string().required("İsim alanı boş bırakılamaz!"),
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
        setFieldError,
      }) => (
        <View style={[styles.inputContainer, { gap: gap }]}>
          <View>
            <InputBar
              onChange={handleChange("fullName")}
              onBlur={handleBlur("fullName")}
              value={values.firstName}
              placeholder={"Full Name"}
              backgroundColor={"white"}
              borderColor={"#EFEFEF"}
            />
            {touched.fullName && errors.fullName ? (
              <Text style={styles.warningText}>{errors.fullName}</Text>
            ) : null}
          </View>
          <View>
            <InputBar
              onChange={(text) => {
                handleChange("email")(text);
                setFirebaseError("");
              }}
              onBlur={handleBlur("email")}
              placeholder={"Email "}
              keyboardType={"email-address"}
              backgroundColor={"white"}
              borderColor={
                firebaseError === "auth/invalid-email" ||
                firebaseError === "auth/email-already-in-use"
                  ? "red"
                  : "#EFEFEF"
              }
            />
            {touched.email && errors.email ? (
              <Text style={styles.warningText}>{errors.email}</Text>
            ) : null}

            {firebaseError === "auth/invalid-email" ||
            firebaseError === "auth/email-already-in-use" ? (
              <Text style={styles.warningText}>{firebaseError}</Text>
            ) : null}
          </View>
          <View>
            <AuthInput
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
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
          </View>
          <CustomButton
            buttonText={"Sign Up"}
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

export default SignUpForm;
