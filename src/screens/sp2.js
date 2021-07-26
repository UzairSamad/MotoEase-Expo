import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Button,
} from "react-native";

export default function sp2({ navigation, route }) {
  const spId = route.params.spId;

  return (
    <SafeAreaView style={{ width: "100%", height: "100%" }}>
      <View style={{ flex: 1, backgroundColor: "red", padding: 10 }}>
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 40 }}>
          MotoEase
        </Text>
      </View>
      <View
        style={{
          flex: 7,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ marginBottom: "12%" }}>
          <Button title="Go to Dashboard" onPress={() => navigation.goBack()} />
        </View>

        <TouchableOpacity
          style={styles.TO}
          onPress={() =>
            navigation.navigate("spMyServices", {
              spId: spId,
            })
          }
        >
          <Text style={styles.text}>My Services</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TO}
          onPress={() =>
            navigation.navigate("spCompletedServices", { spId: spId })
          }
        >
          <Text style={styles.text}>Completed Services</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.TO}
          onPress={() => navigation.navigate("spPayments", { spId: spId })}
        >
          <Text style={styles.text}>Payments</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.TO}>
          <Text style={styles.text} onPress={() => navigation.navigate("spHS")}>
            Help & Support
          </Text>
        </TouchableOpacity>

        {/* <TouchableOpacity style={styles.TO}>
          <Text style={styles.text}>Logout</Text>
        </TouchableOpacity> */}
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  TO: {
    padding: 5,
    backgroundColor: "black",
    width: "75%",
    borderRadius: 5,
    marginBottom: "8%",
  },
  text: {
    fontSize: 20,
    fontWeight: "700",
    textTransform: "uppercase",
    color: "white",
    justifyContent: "center",
    alignSelf: "center",
  },
});
