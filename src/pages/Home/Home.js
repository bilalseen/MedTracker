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
import ConfirmationPopup from "../../components/ConfirmationPopup";

const Home = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [user, setUser] = useState(null);
  const [isAlertHide, setAlertHide] = useState(false);
  const [deletingItem, setDeletingItem] = useState("");

  //current user set the user
  onAuthStateChanged(FIREBASE_AUTH, (authUser) => {
    setUser(authUser);
  });

  // medicine data received
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

  //the selected medicine is deleted
  const deleteMedicine = async (item) => {
    try {
      await deleteDoc(doc(db, user.uid, item.id));
      await getMedicineData();
      setAlertHide(false);
    } catch (err) {
      console.log("İlaç silme hatası: " + err);
    }
  };

  const onDeleteMedicinePress = (item) => {
    setAlertHide(true); // Popup'ı göster
    setDeletingItem(item); // Silinecek öğeyi sakla
  };

  //when user and data downolad, call getMedicineData func
  useEffect(() => {
    if (user) {
      getMedicineData();
    }
  }, [user, data]);

  if (error) {
    return <ErrorAnimation />;
  }

  //navigate to medicine edit page
  const navigateToEditMedicine = (item) => {
    navigation.navigate("EditMedicine", { item });
  };

  const navigateToDetailMedicine = (item) => {
    navigation.navigate("DetailMedicine", { item });
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
              onDeletePress={() => onDeleteMedicinePress(item)}
              onEditPress={navigateToEditMedicine}
              onDetailPress={() => navigateToDetailMedicine(item)}
            />
          )}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          style={styles.medFlatList}
        />
      )}
      <ConfirmationPopup
        isAlertHide={isAlertHide}
        closePopUp={() => setAlertHide(false)}
        deleteMedicine={() => deleteMedicine(deletingItem)}
        item={deletingItem}
        titleText={"Delete Medication"}
        descriptionText={`Are you sure you want to delete this medication? This action cannot be undone.`}
        cancelText={"Cancel"}
        confirmText={"Delete Medicine"}
      />
    </View>
  );
};

export default Home;
