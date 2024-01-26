import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./MedCard.style";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";
import MaterialIcons from "../MaterialIcons";

const MedCard = ({ item }) => {
  const swipteLeft = () => {
    return (
      <View style={styles.deleteButtonContainer}>
        <TouchableOpacity style={styles.deleteButton}>
          <MaterialIcons name={"delete"} size={30} color={"red"} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <GestureHandlerRootView>
      <Swipeable renderLeftActions={swipteLeft}>
        <View
          style={[
            styles.container,
            { backgroundColor: `${item.outOfDate ? "red" : "green"}` },
          ]}
        >
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.date}>{item.expirationDate}</Text>
        </View>
      </Swipeable>
    </GestureHandlerRootView>
  );
};

export default MedCard;
