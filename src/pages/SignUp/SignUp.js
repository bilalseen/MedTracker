import { View } from "react-native";
import React from "react";
import styles from "./SignUp.style";
import SignUpForm from "../../components/SignUpForm";
import CustomLine from "../../components/CustomLine";
import GoogleAuthButton from "../../components/GoogleAuthButton";
const SignUp = () => {
  return (
    <View style={styles.container}>
      <SignUpForm gap={25} />
      <CustomLine
        text={"Or"}
        textColor={"gray"}
        borderColor={"gray"}
        width={300}
      />
      <GoogleAuthButton />
    </View>
  );
};

export default SignUp;
