import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./Home.style";
import SearchBar from "../../components/SearchBar";
import LoadingAnimation from "../../components/LoadingAnimation";
import ErrorAnimation from "../../components/ErrorAnimation";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    try {
    } catch (error) {
      console.error("Veri yükleme hatası:", error);
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <LoadingAnimation />;
  }
  if (error) {
    return <ErrorAnimation />;
  }

  return (
    <View style={styles.container}>
      <SearchBar placeholder={"Search med..."} onSearch={() => null} />
    </View>
  );
};

export default Home;
