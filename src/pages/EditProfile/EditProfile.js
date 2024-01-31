import { View, Image, Text, ToastAndroid } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./EditProfile.style";
import CustomButton from "../../components/CustomButton";
import FIREBASE_AUTH from "../../services/config";
import MaterialIcons from "../../components/MaterialIcons";
import { Formik } from "formik";
import InputBar from "../../components/InputBar";
import { updateProfile } from "firebase/auth";

const EditProfile = ({ navigation }) => {
  const auth = FIREBASE_AUTH;
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
    try {
      await updateProfile(user, {
        displayName: values.displayName,
        email: values.email,
        photoURL: user.photoURL,
      });

      if (values.phoneNumber && values.phoneNumber !== user.phoneNumber) {
        const credential = firebase.auth.PhoneAuthProvider.credential(
          verificationId,
          verificationCode
        );
        await user.updatePhoneNumber(credential);
      }

      console.log("User profile updated successfully:", user);

      navigateToProfile();
      ToastAndroid.show("Profile updated!", ToastAndroid.SHORT);
    } catch (updateError) {
      console.error("Error updating user profile:", updateError);
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
          phoneNumber: user.phoneNumber,
        }}
        onSubmit={(values) => {
          updateUserProfile(values);
          console.log(values);
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View style={styles.inputContainer}>
            <View>
              <Text style={styles.titleText}>Edit Profile</Text>
            </View>
            <InputBar
              value={values.displayName}
              backgroundColor={"white"}
              onChange={handleChange("displayName")}
            />
            <InputBar
              value={values.email}
              backgroundColor={"white"}
              onChange={handleChange("email")}
            />
            <InputBar
              value={values.phoneNumber}
              backgroundColor={"white"}
              onChange={handleChange("phoneNumber")}
              placeholder={values.phoneNumber ? "" : "Add your phone number"}
            />
            <View style={styles.buttonContainer}>
              <CustomButton
                buttonText={"Update Profile"}
                onPress={handleSubmit}
                backgroundColor="black"
                color={"white"}
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
