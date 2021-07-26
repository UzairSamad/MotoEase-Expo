import React, { useState, useEffect } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

import Button from "../components/Button";
import useCurrentLocation from "../hooks/useCurrentLocation";

export default function Page1({ navigation }) {
  const [Latitude, Longitude] = useCurrentLocation();

  function renderHeader() {
    return (
      <View style={{ flex: 2, backgroundColor: "#1111" }}>
        <Image
          style={{
            height: "50%",
            width: "100%",

            alignSelf: "center",
            resizeMode: "contain",
          }}
          source={{
            uri:
              "https://firebasestorage.googleapis.com/v0/b/motoease-11396.appspot.com/o/MotoEase.png?alt=media&token=2564bd7b-a995-42ee-8b56-0ffb7dcf1d7e",
          }}
        />
        <Button
          title="Looking for Service?"
          onPress={() => navigation.navigate("Page0")}
        />
        <Button
          title="Are you a Service Provider?"
          onPress={() => navigation.navigate("spLogin")}
        />

        <Text style={{ textAlign: 'center' }}>{Latitude} {Longitude}</Text>

      </View>
    );
  }

  return <View style={styles.container}>{renderHeader()}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
  },
  titleText: {
    padding: 8,
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
  headingText: {
    padding: 10,
  },
});
