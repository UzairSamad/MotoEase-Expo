import React, { useState } from "react";
import {
  SafeAreaView,
  RefreshControl,
  FlatList,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  Alert,
} from "react-native";
import Card from "../components/Card";
import db from "../db/00firebase";
const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export default function spPendingServ({ navigation, route }) {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setData(callfunctiontopopulateFlatList);
    wait(1000).then(() => setRefreshing(false));
  }, []);

  const spId = route.params.spId;
  const serviceRef = db.collection("sp").doc(spId);

  const callfunctiontopopulateFlatList = () => {
    var newArray = [];

    serviceRef
      .collection("PendingServices")
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
          flex: 1,
          flexDirection: "row",
          backgroundColor: "red",
          padding: 10,
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 40 }}>
          MotoEase
        </Text>
        <TouchableOpacity
          style={{
            marginLeft: 120,
            width: 50,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => navigation.navigate("sp2", { spId: spId })}
        >
          <Image
            source={require("../assets/images/user.png")}
            resizeMode="contain"
            style={{
              width: 40,
              height: 40,
            }}
            placeholeder
          />
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1, flexDirection: "row" }}>
        <TouchableOpacity
          style={{
            backgroundColor: "grey",
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
          }}
          onPress={() => navigation.goBack()}
        >
          <Text
            style={{
              fontSize: 22,
              marginLeft: 25,
              marginRight: 25,
              marginTop: 10,
              color: "white",
            }}
          >
            New Services
          </Text>
        </TouchableOpacity>

        <TouchableHighlight
          style={{
            backgroundColor: "grey",
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
          }}
        >
          <Text
            style={{
              fontSize: 22,
              marginLeft: 15,
              marginRight: 15,
              marginTop: 10,
              color: "white",
            }}
          >
            Pending Services
          </Text>
        </TouchableHighlight>
      </View>
      <View style={{ flex: 11 }}>
        <FlatList
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          ListEmptyComponent={<Text>No New Service Available</Text>}
          style={{ padding: 10, backgroundColor: "#D8E0E5E6" }}
          data={data}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => (
            <Card
              title={item.service}
              sub={item.price}
              ssub={item.title}
              num={item.num}
              type={item.sub}
              service={item.ssub}
              status={item.status}
              onPress={() => {
                const user = item.user;
                const order = item.key;
                const vehicle = item.title;
                const year = item.ssub;
                const fuel = item.sub;
                const number = item.num;
                const pricedb = item.price;
                const serv = item.service;
                {
                  Alert.alert(
                    "MotoEase",
                    "Service Completed? or Rejected?",
                    [
                      {
                        text: "Completed",
                        onPress: () => {
                          {
                            db.collection("User")
                              .doc(user)
                              .collection("MyServices")
                              .doc(order)
                              .update({
                                status: "Service Completed",
                              });
                          }
                          {
                            serviceRef
                              .collection("CompletedServices")
                              .doc(order)
                              .set({
                                key: order,

                                num: number,
                                price: pricedb,
                                service: serv,
                                ssub: year,
                                sub: fuel,
                                title: vehicle,
                                status: "Service Completed",
                              });
                          }
                          {
                            serviceRef
                              .collection("PendingServices")
                              .doc(order)
                              .delete();
                          }
                          setData(callfunctiontopopulateFlatList);
                          {
                            navigation.goBack();
                          }
                        },
                      },
                      {
                        text: "Rejected",
                        onPress: () => {
                          {
                            db.collection("User")
                              .doc(user)
                              .collection("MyServices")
                              .doc(order)
                              .update({
                                status: "Service Rejected",
                              });
                          }
                          {
                            serviceRef
                              .collection("RejectedServices")
                              .doc(order)
                              .set({
                                key: order,
                                num: number,
                                price: pricedb,
                                service: serv,
                                ssub: year,
                                sub: fuel,
                                title: vehicle,
                                status: "Service Rejected after accepting",
                              });
                          }
                          {
                            serviceRef
                              .collection("PendingServices")
                              .doc(order)
                              .delete();
                          }
                          setData(callfunctiontopopulateFlatList);
                        },
                      },
                    ],
                    { cancelable: false }
                  );
                }
              }}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
}
