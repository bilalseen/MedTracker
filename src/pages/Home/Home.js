import { View, Text } from "react-native";
import React from "react";
import styles from "./Home.style";
import SearchBar from "../../components/SearchBar";

const Home = () => {
  return (
    <View style={styles.container}>
      <SearchBar placeholder={"Search med..."} onSearch={() => null} />
    </View>
  );
};

export default Home;
