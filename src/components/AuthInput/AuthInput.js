import { View, TextInput, TouchableWithoutFeedback } from "react-native";
import React, { useState } from "react";
import styles from "./AuthInput.style";
import MaterialIcons from "../../components/MaterialIcons";

const AuthInput = ({
  placeholder,
  onChangeText,
  keyboardType,
  secureTextEntry,
  value,
  backgroundColor,
  color,
  borderColor,
}) => {
  const [toggleButton, setToggleButton] = useState(false);
  const handleToggle = () => {
    toggleButton ? setToggleButton(false) : setToggleButton(true);
  };
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: backgroundColor, borderColor: borderColor },
      ]}
    >
      <TextInput
        style={[styles.input, { color: color }]}
        placeholder={placeholder}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        secureTextEntry={toggleButton ? false : true}
        value={value}
      />
      <TouchableWithoutFeedback onPress={handleToggle}>
        <View style={styles.toggleButtonContainer}>
          <MaterialIcons
            name={toggleButton ? "visibility" : "visibility-off"}
            size={20}
            color={toggleButton ? "black" : "gray"}
            style={styles.arrowIcon}
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default AuthInput;
