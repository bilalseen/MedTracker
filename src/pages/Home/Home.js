import { View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./Home.style";
import SearchBar from "../../components/SearchBar";
import LoadingAnimation from "../../components/LoadingAnimation";
import ErrorAnimation from "../../components/ErrorAnimation";
import MedCard from "../../components/MedCard";
import {
  db,
  collection,
  getDocs,
  doc,
  deleteDoc,
} from "../../services/dbConfig";
import FIREBASE_AUTH from "../../services/config";
import { onAuthStateChanged } from "@firebase/auth";

const Home = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [user, setUser] = useState(null);

  onAuthStateChanged(FIREBASE_AUTH, (authUser) => {
    setUser(authUser);
  });

  const getMedicineData = async () => {
    if (user) {
      try {
        const querySnapshot = await getDocs(collection(db, user.uid));
        const newData = [];
        querySnapshot.forEach((doc) => {
          newData.push({
            ...doc.data(),
            id: doc.id,
          });
        });
        setData(newData);
        setError(false);
      } catch (error) {
        console.error("Veri yükleme hatası:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
  };

  const deleteMedicine = async (item) => {
    try {
      await deleteDoc(doc(db, user.uid, item.id));
      await getMedicineData();
    } catch (err) {
      console.log("İlaç silme hatası: " + err);
    }
  };

  useEffect(() => {
    if (user) {
      getMedicineData();
    }
  }, [user, data]);

  if (error) {
    return <ErrorAnimation />;
  }

  const navigateToEditMedicine = (item) => {
    navigation.navigate("EditMedicine", { item });
  };

  return (
    <View style={styles.container}>
      <SearchBar
        placeholder={"Search med..."}
        onSearch={(text) => setSearch(text)}
      />
      {loading ? (
        <LoadingAnimation />
      ) : (
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <MedCard
              item={item}
              onDeletePress={deleteMedicine}
              onNavigatePress={navigateToEditMedicine}
            />
          )}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          style={styles.medFlatList}
        />
      )}
    </View>
  );
};

export default Home;
