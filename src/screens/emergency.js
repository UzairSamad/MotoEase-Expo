import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";

import ListItem from "../components/lists/ListItem";
import db from "../db/00firebase";
import colors from "../config/colors";

export default function Emergency({ navigation, route }) {
  const userId = route.params.userId;
  const serviceRef = db.collection("services");
  const { v, f, y, t, p, n, m, service } = route.params;
  const EL = [
    {
      title: "Washing",
      subTitle: "Cleaning Services",
      ssub: "Complete car cleaning and Washing",
    },
    {
      title: "Complete Dry Cleaning",
      subTitle: "Cleaning Services",
      ssub: "Complete Interior Dry Cleaning & Washing of your car",
    },
    {
      title: "Periodic Service",
      subTitle: "General Services",
      ssub: "Check and Change All filters and Oils",
    },
    {
      title: "Complete Service",
      subTitle: "General Services",
      ssub:
        "Checking of Oils, Filters, Brakes, Lights, Suspension, Steering Alignment",
    },
    {
      title: "A/C Service",
      subTitle: "General Services",
      ssub: "AC Cleaning and checking of AC Functioning ",
    },
    { title: "Ceramic Coating", subTitle: "Body Works" },
    { title: "Teflon Coating", subTitle: "Body Works" },
    {
      title: "Wheel Alignment and Balancing",
      subTitle: "Tyres & Batteries",
      ssub: "Correction of wheels Alignment and Balance",
    },
    {
      title: "Battery Change",
      subTitle: "Tyres & Batteries",
      ssub: "Battery cost not included in price",
    },
    {
      title: "Front Glass Replacement",
      subTitle: "Glass Work",
    },
    { title: "Rear Glass Replacement", subTitle: "Glass Work" },
  ];
  const data = EL.filter(function(item) {
    return item.subTitle == service;
  }).map(function({ title, subTitle, ssub }) {
    return { title, subTitle, ssub };
  });
  const line = () => (
    <View
      style={{
        backgroundColor: "black",
        height: 0.5,
      }}
    />
  );
  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity
          style={{
            width: 50,
          }}
          onPress={() => navigation.goBack()}
        >
          <Ionicons
            name="chevron-back"
            color="white"
            size="40"
            style={{ height: "100%", width: 50 }}
          />
        </TouchableOpacity>
        <Text style={styles.text}>{service}</Text>
      </View>
      <View style={styles.mid}>
        <FlatList
          style={{ padding: 5, backgroundColor: "#D8E0E5E6" }}
          data={data}
          ItemSeparatorComponent={line}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              subTitle={item.ssub}
              onPress={() => {
                navigation.navigate("ssubServices", {
                  item,
                  v: v,
                  f: f,
                  y: y,
                  n: n,
                  p: p,
                  t: t,
                  m: m,
                  userId: userId,
                });
              }}
            />
          )}
        ></FlatList>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    paddingTop: "2%",
    fontSize: 22,
    marginLeft: "12%",
    fontWeight: "600",
    color: "#fff",
  },
  header: {
    paddingLeft: "2%",
    paddingRight: "5%",
    height: "12.6%",
    flexDirection: "row",
    width: "100%",
    paddingTop: "12%",
    backgroundColor: colors.primary,
  },
  mid: { height: "80%", marginTop: "2%" },
});
