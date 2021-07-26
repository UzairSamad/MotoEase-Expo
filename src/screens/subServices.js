import React from "react";
import {
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import ListItem from "../components/lists/ListItem";
export default function subServices({ navigation, route }) {
  const spId = route.params.spId;
  const address = route.params.address;
  const category = route.params.item.title;
  const EL = [
    {
      title: "Washing",
      subTitle: "Cleaning Services",
      ssub: "Complete car cleaning and Washing",
    },
    {
      title: "Complete Dry Cleaning",
      subTitle: "Cleaning Services",
      ssub: "Complete Car Dry Cleaning",
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
    return item.subTitle == category;
  }).map(function({ title, subTitle, ssub }) {
    return { title, subTitle, ssub };
  });
  return (
    <SafeAreaView style={{ paddingTop: 10, backgroundColor: "#ff6347" }}>
      <View>
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
        <Text style={{ color: "white", fontWeight: "600", fontSize: 25 }}>
          {category}
        </Text>
      </View>
      <View>
        <FlatList
          style={{
            marginBottom: "30%",
            padding: 10,
            backgroundColor: "#f1f1f1",
          }}
          data={data}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              subTitle={item.ssub}
              onPress={() => {
                navigation.navigate("spCarType", {
                  item,
                  spId: spId,
                  category: category,
                  address: address,
                });
              }}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
}
