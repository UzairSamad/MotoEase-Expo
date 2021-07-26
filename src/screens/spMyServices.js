import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import ListItem from "../components/lists/ListItem";

export default function spMyServices({ navigation, route }) {
  const EL = [
    { title: "Cleaning Services" },
    { title: "General Services" },
    { title: "Body Works" },
    { title: "Tyres & Battery" },
    { title: "Glass Work" },
  ];
  const spId = route.params.spId;

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={{ marginTop: "15%", width: "100%", height: "100%" }}>
        <View
          style={{
            flex: 1.5,
            width: "100%",
            justifyContent: "flex-start",
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
          <Text style={{ fontSize: 25, fontWeight: "500", marginTop: 10 }}>
            My Services
          </Text>
        </View>
        <View style={{ flex: 10, backgroundColor: "white" }}>
          <FlatList
            ListEmptyComponent={<Text>Data not Available </Text>}
            style={{ padding: 10, backgroundColor: "#D8E0E5E6" }}
            data={EL}
            keyExtractor={(item) => item.title}
            renderItem={({ item }) => (
              <ListItem
                title={item.title}
                onPress={() => {
                  navigation.navigate("subServices", {
                    item,
                    spId: spId,
                  });
                }}
              />
            )}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
