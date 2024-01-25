import React from "react";
import LottieView from "lottie-react-native";

const ErrorAnimation = () => {
  return (
    <LottieView
      source={require("../../../assets/animation/error-animation.json")}
      autoPlay
      loop
    />
  );
};

export default ErrorAnimation;
