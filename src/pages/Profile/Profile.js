import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./Profile.style";
import CustomButton from "../../components/CustomButton";
import FIREBASE_AUTH from "../../services/config";
import { signOut } from "firebase/auth";
import MedData from "../../../data.json";
import AccountButton from "../../components/AccountButton";
import ToggleButton from "../../components/ToggleButton";
import MaterialIcons from "../../components/MaterialIcons";

const Profile = ({ navigation }) => {
  const auth = FIREBASE_AUTH;
  const [user, setUser] = useState(auth.currentUser);

  //when auth.currentUser download the page open page
  useEffect(() => {
    setUser(auth.currentUser);
  }, [auth.currentUser]);

  //user sign out process started the func
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

  //if user have photo use the user photo but if have not the photo use the user icon
  const UserPhoto = () => {
    return user.photoURL ? (
      <Image
        style={styles.profileImage}
        source={require("../../../assets/profile/profile-photo.png")}
      />
    ) : (
      <MaterialIcons name={"person"} size={30} color={"gray"} />
    );
  };

  //navigate to profile editing page
  const navigateToEditProfile = () => {
    navigation.navigate("EditProfile");
  };

  //navigate to password changing page
  const navigateToPasswordChange = () => {
    navigation.navigate("PasswordChange");
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.profileImageContainer}>
          <UserPhoto />
        </View>
        <View style={styles.profileTextContainer}>
          <Text style={styles.profileName}>{user.displayName}</Text>
          <Text style={styles.profileEmail}>{user.email}</Text>
        </View>
      </View>

      <View style={styles.generalContainer}>
        <Text style={styles.titleText}>General</Text>
        <AccountButton
          iconName={"person"}
          iconColor={"#4286FF"}
          iconBackgroundColor={"#EDF2FF"}
          size={20}
          title={"Edit Profile"}
          description={"Change profile picture, number, E-mail"}
          onPress={navigateToEditProfile}
        />
        <AccountButton
          iconName={"lock"}
          iconColor={"#4286FF"}
          iconBackgroundColor={"#EDF2FF"}
          size={20}
          title={"Change Password"}
          description={"Update and strengthen account security"}
          onPress={navigateToPasswordChange}
        />
      </View>
      <View style={styles.preferencesContainer}>
        <Text style={styles.titleText}>Preferences</Text>
        <ToggleButton
          iconName={"notifications"}
          iconColor={"#4286FF"}
          iconBackgroundColor={"#EDF2FF"}
          size={20}
          title={"Notification"}
          description={"Customize your notication prefecenses"}
        />
        {/* icon adı değiştirilecek */}
        <ToggleButton
          iconName={"nights-stay"}
          iconColor={"#4286FF"}
          iconBackgroundColor={"#EDF2FF"}
          size={20}
          title={"Dark Mode"}
          description={"Customize your theme"}
        />
        <AccountButton
          iconName={"logout"}
          iconColor={"#CE1040"}
          iconBackgroundColor={"#FFF1F5"}
          size={20}
          title={"Log Out"}
          titleColor={"#CE1040"}
          description={"Securely log out of Account"}
          onPress={userSignOut}
        />
      </View>
    </View>
  );
};

export default Profile;
