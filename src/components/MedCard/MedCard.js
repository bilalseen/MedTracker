import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import styles from "./MedCard.style";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";
import MaterialIcons from "../MaterialIcons";

const MedCard = ({ item, onDeletePress, onEditPress, onDetailPress }) => {
  const swipteLeft = () => {
    return (
      <View style={styles.deleteButtonContainer}>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => onDeletePress(item)}
        >
          <MaterialIcons name={"delete"} size={30} color={"red"} />
        </TouchableOpacity>
      </View>
    );
  };

  const swipteRight = () => {
    return (
      <View style={styles.deleteButtonContainer}>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => onEditPress(item)}
        >
          <MaterialIcons name={"edit"} size={30} color={"orange"} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <GestureHandlerRootView>
      <Swipeable
        renderLeftActions={swipteLeft}
        renderRightActions={swipteRight}
      >
        <TouchableWithoutFeedback onPress={onDetailPress}>
          <View
            style={[
              styles.container,
              {
                // borderColor: `${item.outOfDate ? "red" : "green"}`,
                shadowColor: `${item.outOfDate ? "#CE1040" : "#4286FF"}`,
              },
            ]}
          >
            <Text
              style={[
                styles.name,
                { color: `${item.outOfDate ? "#CE1040" : "#4286FF"}` },
              ]}
            >
              {item.name}
            </Text>
            <Text
              style={[
                styles.date,
                {
                  color: `${item.outOfDate ? "#CE1040" : "#4286FF"}`,
                },
              ]}
            >
              {item.date}
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </Swipeable>
    </GestureHandlerRootView>
  );
};

export default MedCard;
