import React from "react";
import { SafeAreaView, Text, View, Button } from "react-native";

export default function spHS({ navigation }) {
  return (
    <SafeAreaView>
      <View style={{ justifyContent: "center", alignSelf: "center" }}>
        <Text
          style={{
            fontSize: 30,
            justifyContent: "center",
            alignSelf: "center",
            marginTop: "50%",
          }}
        >
          Whatsapp Us at
        </Text>
        <Text
          style={{
            fontSize: 30,
            justifyContent: "center",
            alignSelf: "center",
          }}
        >
          <Text
            style={{
              fontSize: 30,
              justifyContent: "center",
              alignSelf: "center",
            }}
          >
            +91 90415 80983
          </Text>
        </Text>
      </View>
      <View style={{ marginTop: "20%" }}>
        <Button title="Go Back" onPress={() => navigation.goBack()} />
      </View>
    </SafeAreaView>
  );
}
