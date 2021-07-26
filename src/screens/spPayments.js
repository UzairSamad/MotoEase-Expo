import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

export default function spPayments({ navigation }) {
  console.log("App Executed");
  return (
    <SafeAreaView style={{ width: "100%", height: "100%" }}>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <TouchableOpacity
          style={{
            flex: 1,
            width: 50,
            paddingLeft: 10,
            justifyContent: "centre",
          }}
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
        <TouchableOpacity
          style={{
            marginRight: 20,
            width: 50,
            paddingLeft: 10,
            justifyContent: "centre",
          }}
        >
          <Image
            source={require("../assets/images/service.jpg")}
            resizeMode="contain"
            style={{
              width: 40,
              height: 40,
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 2, backgroundColor: "red", padding: 10 }}>
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 40 }}>
          MotoEase
        </Text>
        <Text style={{ color: "white", fontSize: 30 }}>Payments</Text>
      </View>
      <View style={{ flex: 12 }}></View>
    </SafeAreaView>
  );
}
