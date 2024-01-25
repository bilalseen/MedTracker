import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./Profile.style";
import CustomButton from "../../components/CustomButton";
import FIREBASE_AUTH from "../../services/config";
import { signOut } from "firebase/auth";

const Profile = () => {
  const auth = FIREBASE_AUTH;
  const [user, setUser] = useState(auth.currentUser);

  useEffect(() => {
    setUser(auth.currentUser);
    console.log(user);
  }, [auth.currentUser]);

  const userSignOut = () => {
    const user = auth.currentUser;

    if (user) {
      signOut(auth)
        .then(() => {
          console.log("Sign-out successful.");
        })
        .catch((error) => {
          console.log("An error happened.", error);
        });
    }
  };

  return (
    <View style={styles.container}>
      <Text>{user.displayName}</Text>
      <CustomButton
        buttonText={"Log out"}
        backgroundColor={"red"}
        onPress={userSignOut}
      />
    </View>
  );
};

export default Profile;
