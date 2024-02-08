import { View, Text, Image } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./ProfileInformation.style";
import MaterialIcons from "../../components/MaterialIcons";
import { getAuth, deleteUser } from "firebase/auth";
import CustomButton from "../../components/CustomButton";
import AwesomeAlert from "react-native-awesome-alerts";
import LottieView from "lottie-react-native";

const ProfileInformation = ({ navigation }) => {
  const auth = getAuth();
  const [user, setUser] = useState(auth.currentUser);
  const [isAlertHide, setAlertHide] = useState(false);
  const [isAccountDeleted, setAccountDeleted] = useState(false);
  const [count, setCount] = useState(5);
  const [running, setRunning] = useState(false);

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

  const deleteAccount = () => {
    setAccountDeleted(true);

    const timeout = setTimeout(() => {
      deleteUser(user)
        .then(() => {
          // User deleted.
          console.log("Account deleted");
        })
        .catch((error) => {
          // An error ocurred
          console.log("Account delete error");

          // ...
        });
    }, 1000);
  };

  if (running) {
    if (count > 0) {
      const timeout = setTimeout(() => {
        setCount(count - 1);
      }, 1000);
    }
  }

  const startTimer = () => {
    setCount(5);
    setRunning(true);
  };

  if (isAccountDeleted) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <LottieView
          source={require("../../../assets/animation/delete-animation.json")}
          autoPlay
          loop
        />
      </View>
    );
  }

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
        onPress={() => {
          isAlertHide ? setAlertHide(false) : setAlertHide(true);
          startTimer();
        }}
        backgroundColor="red"
        buttonTextColor={"white"}
        ariaDisabled={false}
        width={240}
        height={50}
      />
      <AwesomeAlert
        show={isAlertHide}
        showProgress={false}
        closeOnTouchOutside={false}
        alertContainerStyle={{}}
        contentContainerStyle={{ paddingVertical: 20, gap: 20 }}
        //
        title={"Are you sure want to delete your account permanently?"}
        titleStyle={{
          color: "black",
          fontWeight: "600",
          fontSize: 20,
        }}
        //
        message={`Press"Delete account" to remove it permanently, or "Cancel" if you want to keep your benefits.`}
        messageStyle={{ fontSize: 12 }}
        //
        showCancelButton={true}
        cancelText={"Cancel"}
        cancelButtonTextStyle={{ fontSize: 16 }}
        cancelButtonColor={"#213060"}
        cancelButtonStyle={{
          hadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.3,
          shadowRadius: 3,
          elevation: 5,
        }}
        onCancelPressed={() => {
          setAlertHide(false);
        }}
        //
        showConfirmButton={true}
        confirmText={count > 0 ? `Delete account (${count})` : `Delete account`}
        confirmButtonTextStyle={{ color: "black", fontSize: 16 }}
        confirmButtonColor={"white"}
        confirmButtonStyle={{
          borderColor: "gray",
          borderWidth: 1,
          hadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.3,
          shadowRadius: 3,
          elevation: 5,
        }}
        onConfirmPressed={deleteAccount}
      />
    </View>
  );
};

export default ProfileInformation;
