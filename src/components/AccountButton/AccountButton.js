import { View, Text, TouchableWithoutFeedback } from "react-native";
import React from "react";
import styles from "./AccountButton.style";
import MaterialIcons from "../MaterialIcons";

const AccountButton = ({
  iconName,
  iconSize,
  iconColor,
  iconBackgroundColor,
  title,
  description,
  titleColor,
  onPress,
}) => {
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
        <MaterialIcons
          name={"chevron-right"}
          size={20}
          color={"gray"}
          style={styles.arrowIcon}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AccountButton;
