import React, { useState } from "react";
import {
  SafeAreaView,
  FlatList,
  RefreshControl,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import Card from "../components/Card";
import db from "../db/00firebase";
const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export default function spCompletedServices({ navigation, route }) {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => setRefreshing(false));
  }, []);
  const spId = route.params.spId;
  const serviceRef = db.collection("sp").doc(spId);

  const callfunctiontopopulateFlatList = () => {
    var newArray = [];

    serviceRef
      .collection("CompletedServices")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((documentSnapshot) => {
          newArray.push(documentSnapshot.data());
        });
      })
      .then((testing) => {
        setData(newArray);
      });
  };
  const [data, setData] = useState(callfunctiontopopulateFlatList);

  return (
    <SafeAreaView style={{ height: "100%", width: "100%" }}>
      <View
        style={{
          width: "100%",
          height: "100%",
          flex: 2,
          backgroundColor: "red",
          padding: 10,
        }}
      >
        <TouchableOpacity
          style={{
            width: 50,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={require("../assets/images/back.png")}
            resizeMode="contain"
            style={{
              width: 40,
              height: 40,
            }}
            placeholeder
          />
        </TouchableOpacity>
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 40 }}>
          MotoEase
        </Text>
      </View>

      <View style={{ flex: 11 }}>
        <FlatList
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          ListEmptyComponent={<Text>No Service Available</Text>}
          style={{ padding: 10, backgroundColor: "#D8E0E5E6" }}
          data={data}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => (
            <Card
              title={item.service}
              sub={<Text>Rs. {item.price}</Text>}
              ssub={item.title}
              num={item.num}
              type={item.sub}
              service={item.ssub}
              status={item.status}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
}
