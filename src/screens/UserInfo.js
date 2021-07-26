import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";
import * as firebase from "firebase";
import "@firebase/auth";

export default function UserInfo({ navigation, route }) {
  const userId = route.params.userId;

  function rendermid() {
    return (
      <SafeAreaView style={{ width: "100%", height: "100%" }}>
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            style={{
              width: 50,
              paddingLeft: 10,
              paddingTop: 10,
              justifyContent: "centre",
            }}
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

        <View
          style={{
            paddingTop: "30%",

            flex: 8,
            width: 350,
            justifyContent: "space-between",
            alignSelf: "center",
            marginBottom: "50%",
          }}
        >
          <Button
            title="My Services"
            onPress={() => navigation.navigate("MyServices", { userId })}
          />
          <Button
            title="My Vehicle"
            onPress={() => navigation.navigate("MyVehicle")}
          />
          <Button
            title="Refer and Earn"
            onPress={() => {
              alert("Details will be added soon");
              return;
            }}
          />
          <Button
            title="Help & Support"
            onPress={() => {
              alert("send your query to +91 90415 80983");
              return;
            }}
          />
          {/* <Button
            title="Logout"
            onPress={() => {
              Alert.alert("MotoEase", "Are you sure you want to Logout?", [
                {
                  text: "Cancel",
                  onPress: () => null,
                },
                {
                  text: "yes",
                  onPress: () => {
                    async () => {
                      try {
                        await firebase.auth().signOut();
                        navigation.navigate("Page1");
                      } catch (err) {
                        showMessage({
                          text: `Error: ${err.message}`,
                          color: "red",
                        });
                      }
                    };
                  },
                },
              ]);
            }}
          /> */}
        </View>
      </SafeAreaView>
    );
  }

  return <View style={styles1.container}>{rendermid()}</View>;
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    height: 10,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "center",
  },
});
const styles1 = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
  },
});
