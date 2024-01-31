import { View, Text, TouchableWithoutFeedback } from "react-native";
import React, { useState } from "react";
import styles from "./ToggleButton.style";
import MaterialIcons from "../MaterialIcons";

const ToggleButton = ({
  iconName,
  iconSize,
  iconColor,
  iconBackgroundColor,
  title,
  description,
  titleColor,
  onPress,
}) => {
  const [toggleButton, setToggleButton] = useState(false);
  const handleToggle = () => {
    toggleButton ? setToggleButton(false) : setToggleButton(true);
  };
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.inlineContainer}>
          <View
            style={[
              styles.iconContainer,
              { backgroundColor: iconBackgroundColor },
            ]}
          >
            <MaterialIcons name={iconName} size={iconSize} color={iconColor} />
          </View>
          <View style={styles.textContainer}>
            <Text
              style={[
                styles.titleText,
                {
                  color: titleColor,
                },
              ]}
            >
              {title}
            </Text>
            <Text style={styles.descriptionText}>{description}</Text>
          </View>
        </View>
        <TouchableWithoutFeedback onPress={handleToggle}>
          <View style={styles.toggleButtonContainer}>
            <MaterialIcons
              name={toggleButton ? "toggle-on" : "toggle-off"}
              size={40}
              color={toggleButton ? "blue" : "gray"}
              style={styles.arrowIcon}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ToggleButton;
