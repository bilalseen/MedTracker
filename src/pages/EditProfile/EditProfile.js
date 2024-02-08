import React, { useState, useEffect } from "react";
import { View, Image, Text, ToastAndroid } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import styles from "./EditProfile.style";
import CustomButton from "../../components/CustomButton";
import MaterialIcons from "../../components/MaterialIcons";
import InputBar from "../../components/InputBar";
import { updateProfile, updateEmail, getAuth } from "firebase/auth";

const EditProfile = ({ navigation }) => {
  const auth = getAuth();
  const [user, setUser] = useState(auth.currentUser);

  useEffect(() => {
    setUser(auth.currentUser);
  }, [auth.currentUser]);

  const UserPhoto = () => {
    return user.photoURL ? (
      <Image
        style={styles.profileImage}
        source={require("../../../assets/profile/profile-photo.png")}
      />
    ) : (
      <View style={styles.profileImageContainer}>
        <MaterialIcons name={"person"} size={50} color={"gray"} />
      </View>
    );
  };

  const updateUserProfile = async (values) => {
    const auth = getAuth();
    try {
      await updateProfile(auth.currentUser, {
        displayName: values.displayName,
        phoneNumber: values.phoneNumber,
      });

      navigateToProfile();
      ToastAndroid.show("Profile updated!", ToastAndroid.SHORT);
    } catch (updateError) {
      console.error("Error updating user profile:", updateError);
      ToastAndroid.show(
        `"Error updating user profile ${updateError}`,
        ToastAndroid.SHORT
      );
    }
  };

  const navigateToProfile = () => {
    navigation.navigate("TabNavigation");
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <UserPhoto />
        <CustomButton
          buttonText={"Change profile picture"}
          backgroundColor={"white"}
          fontSize={10}
          color={"gray"}
        />
      </View>

      <Formik
        initialValues={{
          displayName: user.displayName,
          email: user.email,
          phoneNumber: user.phoneNumber || "",
        }}
        onSubmit={(values) => {
          updateUserProfile(values);
        }}
        validationSchema={Yup.object().shape({
          displayName: Yup.string().required("Name field cannot be empty!"),
          email: Yup.string()
            .email("Enter a valid email")
            .required("Email field cannot be empty"),
          phoneNumber: Yup.string().min(
            10,
            "Phone number must be at least 10 digits long"
          ),
        })}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View style={styles.inputContainer}>
            <View>
              <Text style={styles.titleText}>Edit Profile</Text>
            </View>
            <View>
              <InputBar
                value={values.displayName}
                backgroundColor={"white"}
                onChange={handleChange("displayName")}
                borderColor={
                  touched.displayName && errors.displayName ? "red" : "white"
                }
              />
              {touched.displayName && errors.displayName ? (
                <Text style={styles.warningText}>{errors.displayName}</Text>
              ) : null}
            </View>
            <View>
              <InputBar
                value={values.email}
                backgroundColor={"white"}
                onChange={handleChange("email")}
                borderColor={touched.email && errors.email ? "red" : "white"}
                keyboardType={"email-address"}
              />
              {touched.email && errors.email ? (
                <Text style={styles.warningText}>{errors.email}</Text>
              ) : null}
            </View>
            <View>
              <InputBar
                value={values.phoneNumber}
                backgroundColor={"white"}
                onChange={handleChange("phoneNumber")}
                placeholder={values.phoneNumber ? "" : "Add your phone number"}
                borderColor={errors.phoneNumber ? "red" : "white"}
                keyboardType={"phone-pad"}
              />
              {errors.phoneNumber ? (
                <Text style={styles.warningText}>{errors.phoneNumber}</Text>
              ) : null}
            </View>
            <View style={styles.buttonContainer}>
              <CustomButton
                buttonText={"Update Profile"}
                onPress={handleSubmit}
                backgroundColor="#213060"
                buttonTextColor={"white"}
                ariaDisabled={false}
                width={240}
                height={50}
              />
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default EditProfile;
