import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import db from "../db/00firebase";

export default function MyProfile({ navigation, route }) {
  const dbRef = db.collection("User").doc();

  // const { userId } = route.params;
  const [nam, setNam] = useState(
    dbRef.get().then((doc) => {
      if (doc.exists) {
        dbRef.onSnapshot((docs) => {
          let _name = docs.get("name");
          setNam(_name);
        });
      } else "edit";
    })
  );
  const [em, setEm] = useState(
    dbRef.get().then((doc) => {
      if (doc.exists) {
        dbRef.onSnapshot((docs) => {
          let _name = docs.get("email");
          setEm(_name);
        });
      } else "edit";
    })
  );
  const [mob, setMob] = useState(
    dbRef.get().then((doc) => {
      if (doc.exists) {
        dbRef.onSnapshot((docs) => {
          let _name = docs.get("mobile");
          setMob(_name);
        });
      } else "edit";
    })
  );
  function rendermid() {
    return (
      <View
        style={{
          width: "100%",
          marginTop: "15%",
          flex: 6,
          flexDirection: "column",
          height: "100%",
        }}
      >
        <Text style={{ fontSize: 30, marginLeft: 20, fontWeight: "700" }}>
          My Profile
        </Text>
        <View
          style={{
            flexDirection: "column",
            height: 40,
            marginLeft: 30,
            marginTop: "15%",
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "500" }}>Name: </Text>
          <TextInput
            style={{
              color: "black",
              marginTop: 8,
              backgroundColor: "#f1f1f1",
              borderBottomColor: "#ffff",
              width: "70%",
              height: 25,
            }}
            placeholder="Enter Email"
            onChangeText={(e) => {
              setNam(e);
            }}
            value={nam.toString()}
          />

          <Text style={{ fontSize: 20, marginTop: 8, fontWeight: "500" }}>
            Email:{" "}
          </Text>
          <TextInput
            style={{
              color: "black",
              marginTop: 8,
              backgroundColor: "#f1f1f1",
              borderBottomColor: "#ffff",
              width: "70%",
              height: 25,
            }}
            placeholder="Enter Email"
            onChangeText={(e) => {
              setEm(e);
            }}
            value={em}
          />
          <Text style={{ fontSize: 20, marginTop: 8 }}>Mobile: </Text>
          <TextInput
            style={{
              color: "black",
              marginTop: 8,
              backgroundColor: "#f1f1f1",
              borderBottomColor: "#ffff",
              width: "70%",
              height: 25,
            }}
            placeholder="Enter Mobile No. "
            onChangeText={(m) => {
              setMob(m);
            }}
            value={mob}
          />
          <TouchableOpacity
            style={{
              height: 30,
              backgroundColor: "black",
              width: "50%",
              borderRadius: 10,
              justifyContent: "center",
              alignSelf: "center",
              marginTop: "15%",
            }}
            onPress={() => {
              if (nam == null) {
                alert("Please add Name");

                return;
              }
              {
                dbRef
                  .set({
                    name: nam,
                    email: em,
                    mobile: mob,
                    key: mob,
                  })
                  .then(() => {});
              }
              alert("Data Saved Successfully");
            }}
          >
            <Text
              style={{
                color: "#f1f1f1",
                fontSize: 20,
                justifyContent: "center",
                alignSelf: "center",
              }}
            >
              {" "}
              save
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  function renderfooter() {
    return (
      <View style={{ flex: 1, flexDirection: "row", height: 50 }}>
        <TouchableOpacity
          style={{
            width: "50%",
            alignItems: "center",
            alignContent: "center",
            marginTop: 22,
          }}
          onPress={() => navigation.navigate("Services")}
        >
          <Image
            source={require("../assets/images/service.jpg")}
            resizeMode="contain"
            style={{
              width: 35,
              height: 35,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={{
            width: "50%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={require("../assets/images/user.png")}
            resizeMode="contain"
            style={{
              width: 40,
              height: 40,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={styles1.container}>
      {rendermid()}
      {renderfooter()}
      <StatusBar style="auto" />
    </View>
  );
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
    flex: 1,
    flexDirection: "column",
    height: 50,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
