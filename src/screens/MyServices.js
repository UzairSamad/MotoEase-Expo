import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Card from "../components/Card";
import db from "../db/00firebase";

export default function MyServices({ navigation, route }) {
  const userId = route.params.userId;
  const serviceRef = db
    .collection("User")
    .doc(userId)
    .collection("MyServices");

  const callfunctiontopopulateFlatList = () => {
    var newArray = [];
    serviceRef
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((documentSnapshot) => {
          newArray.push(documentSnapshot.data());
        });
      })
      .then((testing) => {
        setExampleState(newArray);
      });
  };
  const [exampleState, setExampleState] = useState(
    callfunctiontopopulateFlatList
  );
  return (
    <View style={{ marginTop: "15%", width: "100%", height: "100%" }}>
      <View
        style={{
          flex: 1,
          width: 300,
          justifyContent: "center",
          height: 40,
        }}
      >
        <TouchableOpacity
          style={{ width: 50, paddingLeft: 10, justifyContent: "centre" }}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={require("../assets/images/back.png")}
            resizeMode="contain"
            style={{
              width: 30,
              height: 30,
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 10 }}>
        <Text style={{ fontSize: 30 }}>My Services</Text>
        <FlatList
          ListEmptyComponent={<Text>Data not Available </Text>}
          style={{ padding: 10, backgroundColor: "#D8E0E5E6" }}
          data={exampleState}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => (
            <Card
              title={item.service}
              firm={item.firm}
              sub={item.title}
              num={item.num}
              service={item.price}
              ssub={item.ssub}
              type={item.ssub}
              status={item.status}
            />
          )}
        />
      </View>
    </View>
  );
}
