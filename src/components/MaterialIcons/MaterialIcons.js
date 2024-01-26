import { View, Text } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";

const MaterialIcons = ({ name, size, color }) => {
  return (
    <View>
      <Icon name={name} size={size} color={color} />
    </View>
  );
};

export default MaterialIcons;
