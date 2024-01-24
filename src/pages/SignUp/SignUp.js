import { View } from "react-native";
import React from "react";
import styles from "./SignUp.style";
import SignUpForm from "../../components/SignUpForm";
const SignUp = () => {
  return (
    <View style={styles.container}>
      <SignUpForm gap={25} />
    </View>
  );
};

export default SignUp;
