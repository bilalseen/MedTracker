import { View, Text, Image } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./ProfileInformation.style";
import MaterialIcons from "../../components/MaterialIcons";
import { getAuth } from "firebase/auth";
import CustomButton from "../../components/CustomButton";

const ProfileInformation = () => {
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
      <View style={styles.profileImage}>
        <MaterialIcons name={"person"} size={50} color={"gray"} />
      </View>
    );
  };

  const EmailVerified = () => {
    return user.emailVerified ? (
      <MaterialIcons name={"verified"} size={20} color={"green"} />
    ) : (
      <MaterialIcons name={"verified"} size={20} color={"gray"} />
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <UserPhoto />
        <View style={styles.informationContainer}>
          <Text style={styles.informationText}>{user.displayName}</Text>
          <View style={styles.emailcontainer}>
            <Text style={styles.informationText}>{user.email}</Text>
            <EmailVerified />
          </View>
          <Text style={styles.informationText}>555 444 3322</Text>
        </View>
      </View>
      <CustomButton
        buttonText={"Delete account"}
        onPress={null}
        backgroundColor="red"
        buttonTextColor={"white"}
        ariaDisabled={false}
        width={240}
        height={50}
      />
    </View>
  );
};

export default ProfileInformation;
