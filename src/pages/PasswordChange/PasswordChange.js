import { View, Text, ToastAndroid } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./PasswordChange.style";
import CustomButton from "../../components/CustomButton";
import FIREBASE_AUTH from "../../services/config";
import MaterialIcons from "../../components/MaterialIcons";
import { Formik } from "formik";
import AuthInput from "../../components/AuthInput";
import { updatePassword } from "firebase/auth";
import { reauthenticateWithCredential, EmailAuthProvider } from "firebase/auth";

const PasswordChange = ({ navigation }) => {
  const auth = FIREBASE_AUTH;
  const [user, setUser] = useState(auth.currentUser);
  const [currentPasswordInputBorderColor, setCurrentPasswordInputBorderColor] =
    useState("white");
  const [newPasswordInputBorderColor, setNewPasswordInputBorderColor] =
    useState("white");

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

  const updateUserPassword = async (values) => {
    if (values.newPassword === values.newPasswordAgain) {
      try {
        // Kullanıcıyı tekrar giriş yapmaya zorla
        const updatedUser = auth.currentUser; // Güncel kullanıcı nesnesini al
        const credential = EmailAuthProvider.credential(
          updatedUser.email,
          values.currentPassword
        );
        await reauthenticateWithCredential(updatedUser, credential);

        // Şifreyi güncelle
        await updatePassword(updatedUser, values.newPassword);

        console.log("Password changed successfully!", updatedUser);

        navigateToProfile();
        ToastAndroid.show("Password changed successfully!", ToastAndroid.SHORT);
      } catch (updateError) {
        ToastAndroid.show(
          "Current password wrong! Please try again!",
          ToastAndroid.SHORT
        );
        setCurrentPasswordInputBorderColor("red");
        // ...
      }
    } else {
      ToastAndroid.show(
        "New passwords are not the same. Please try again!",
        ToastAndroid.SHORT
      );
      setNewPasswordInputBorderColor("red");
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
        initialValues={{}}
        onSubmit={(values) => {
          updateUserPassword(values);
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View style={styles.inputContainer}>
            <View>
              <Text style={styles.titleText}>Edit Profile</Text>
            </View>
            <View>
              <AuthInput
                value={values.currentPassword}
                backgroundColor={"white"}
                onChange={(text) => {
                  handleChange("currentPassword")(text);
                  setCurrentPasswordInputBorderColor("white");
                }}
                placeholder={"Current Password"}
                borderColor={currentPasswordInputBorderColor}
              />

              <Text
                style={[
                  styles.warningText,
                  {
                    display:
                      currentPasswordInputBorderColor === "white"
                        ? "none"
                        : "hidden",
                  },
                ]}
              >
                Current Password wrong!!!
              </Text>
            </View>

            <AuthInput
              value={values.newPassword}
              backgroundColor={"white"}
              onChange={(text) => {
                handleChange("newPassword")(text);
                setNewPasswordInputBorderColor("white");
              }}
              placeholder={"New Password"}
              borderColor={newPasswordInputBorderColor}
            />

            <View>
              <AuthInput
                value={values.newPasswordAgain}
                backgroundColor={"white"}
                onChange={(text) => {
                  handleChange("newPasswordAgain")(text);
                  setNewPasswordInputBorderColor("white");
                }}
                placeholder={"New Password Again"}
                borderColor={newPasswordInputBorderColor}
              />
              <Text
                style={[
                  styles.warningText,
                  {
                    display:
                      newPasswordInputBorderColor === "white"
                        ? "none"
                        : "hidden",
                  },
                ]}
              >
                Current Password wrong!!!
              </Text>
            </View>

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

export default PasswordChange;
