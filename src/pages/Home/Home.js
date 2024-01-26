import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./Home.style";
import SearchBar from "../../components/SearchBar";
import LoadingAnimation from "../../components/LoadingAnimation";
import ErrorAnimation from "../../components/ErrorAnimation";
import MedData from "../../../data.json";
import MedCard from "../../components/MedCard";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState(MedData);

  useEffect(() => {
    try {
    } catch (error) {
      console.error("Veri yükleme hatası:", error);
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    setData(MedData);
  }, [MedData]);

  if (loading) {
    return <LoadingAnimation />;
  }
  if (error) {
    return <ErrorAnimation />;
  }

  const MedRenderItem = ({ item }) => {
    return <MedCard item={item} />;
  };

  return (
    <View style={styles.container}>
      <SearchBar placeholder={"Search med..."} onSearch={() => null} />
      <FlatList
        data={data}
        renderItem={({ item }) => <MedRenderItem item={item} />}
        showsVerticalScrollIndicator={false}
        style={styles.medFlatList}
      />
    </View>
  );
};

export default Home;
