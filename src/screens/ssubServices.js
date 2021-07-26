import React, { useState } from "react";
import uuid from "react-native-uuid";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  StyleSheet,
  Modal,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import ListItem from "../components/lists/ListItem";
import colors from "../config/colors";
import db from "../db/00firebase";
import Button from "../components/Button";
export default function ssubServices({ navigation, route }) {
  const [firmName, setFirmName] = useState();

  const [price, setPrice] = useState();
  const [SupId, setSupId] = useState();
  const [address, setAddress] = useState();
  const [mdVisible, setMdVisible] = useState(false);
  const orderId = uuid.v4();
  const userId = route.params.userId;
  const service = route.params.item.title;
  const desc = route.params.item.ssub;
  const type = route.params.t;
  const { v, f, y, n, p, m } = route.params;
  const serviceRef = db
    .collection("User")
    .doc(userId)
    .collection("MyServices");

  const pinRef = db
    .collection("services")
    .doc(service)
    .collection(type);
  const supplierRef = pinRef.where("pincode", "==", p.trim());
  if (supplierRef.empty) {
    <Text
      style={{
        justifyContent: "center",
        alignSelf: "center",
        fontSize: 20,
        fontWeight: "500",
      }}
    >
      No Service Provider Available
    </Text>;
    return;
  }
  const callfunctiontopopulateFlatList = () => {
    var newArray = [];

    supplierRef
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
    <>
      <View>
        <View style={styles.header}>
          <TouchableOpacity
            style={{ width: 30 }}
            onPress={() => navigation.goBack()}
          >
            <Ionicons
              name="chevron-back"
              color="white"
              size="40"
              style={{ height: "100%", width: 50 }}
            />
          </TouchableOpacity>

          <Text style={styles.textHeading}>Service providers near you</Text>
        </View>
        <View style={styles.mid}>
          <View style={{ flexDirection: "row", padding: 10 }}>
            <Text style={{ fontSize: 20, fontWeight: "500" }}>Service:</Text>
            <Text
              style={{ fontSize: 20, fontWeight: "500", marginLeft: "10%" }}
            >
              {service}
            </Text>
          </View>
          <FlatList
            ListEmptyComponent={
              <Text
                style={{
                  justifyContent: "center",
                  alignSelf: "center",
                  fontSize: 20,
                  fontWeight: "500",
                  marginTop: "20%",
                }}
              >
                No Service Provider Available
              </Text>
            }
            style={{ padding: 10, backgroundColor: "#D8E0E5E6" }}
            data={data}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => (
              <ListItem
                title={item.firmName}
                subTitle={"Rs." + item.price}
                ssub={item.ssub}
                onPress={() => {
                  setMdVisible(true),
                    setFirmName(item.firmName),
                    setAddress(item.address),
                    setPrice(item.price);
                  setSupId(item.key);
                }}
              />
            )}
          />
        </View>
      </View>
      <Modal
        style={{ borderRadius: 15, maxHeight: "70%" }}
        backgroundColor="white"
        visible={mdVisible}
        animationIn="slideInUp"
      >
        <View>
          <View
            style={{
              height: "12.6%",
              backgroundColor: "green",

              flexDirection: "column-reverse",
            }}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "600",
                alignSelf: "center",
                fontSize: 25,
                width: "100%",
                marginLeft: "5%",
                marginBottom: "1%",
              }}
            >
              Check Details
            </Text>
          </View>
          <View
            style={{
              height: "50%",
              paddingTop: "10%",
              justifyContent: "space-between",
              flexDirection: "column",
              marginLeft: "8%",
              paddingBottom: "10%",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.text}>Mobile: </Text>
              <Text style={styles.text}>{m}</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.text}>Vehicle: </Text>
              <Text style={styles.text}>{v}</Text>
            </View>

            <View style={{ flexDirection: "row" }}>
              <Text style={styles.text}>Fuel Type: </Text>
              <Text style={styles.text}>{f}</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.text}>Purchase Year: </Text>
              <Text style={styles.text}>{y}</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.text}>Registration No.: </Text>
              <Text style={styles.text}>{n}</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.text}>Service: </Text>
              <Text style={styles.text}>{service}</Text>
            </View>
            <Text style={styles.text}>{desc}</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.text}>Service Provider: </Text>
              <Text style={styles.text}>{firmName}</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.text}>Address: </Text>
              <Text style={styles.text}>{address}</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.text}>Amount: </Text>
              <Text style={styles.text}>Rs. </Text>
              <Text style={styles.text}>{price}</Text>
            </View>
          </View>
          <View
            style={{
              height: "30%",
              padding: "5%",

              justifyContent: "center",
            }}
          >
            <Button
              title="Confirm Booking"
              onPress={() => {
                if (word == null) {
                  alert("Please Enter Mobile No.");
                  return;
                } else;
                {
                  {
                    serviceRef.doc(orderId).set({
                      mobileNo: m,
                      service: service,
                      firm: firmName,
                      price: price,
                      title: v,
                      sub: f,
                      ssub: y,
                      num: n,
                      user: userId,
                      supplier: SupId,
                      status: "Pending Confirmation",
                      key: orderId,
                    });
                  }
                  {
                    db.collection("sp")
                      .doc(SupId)
                      .collection("NewServices")
                      .doc(orderId)
                      .set({
                        mobile: m,
                        service: service,
                        price: price,
                        title: v,
                        sub: f,
                        ssub: y,
                        num: n,
                        user: userId,
                        status: "Pending Confirmation",
                        key: orderId,
                      });
                  }

                  {
                    Alert.alert(
                      "MotoEase",
                      "Service Provider will call you shortly, you can check status in  My Services",
                      [
                        {
                          text: "Ok",
                          onPress: () => {
                            setMdVisible(false);
                            navigation.navigate("Services", userId);
                          },
                        },
                      ]
                    );
                  }
                }
              }}
            />
            <TouchableOpacity
              style={{
                alignSelf: "center",
                justifyContent: "center",
                height: "30%",
                width: "70%",
                backgroundColor: "black",
                borderRadius: 5,
              }}
            >
              <Text
                style={{
                  alignSelf: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: 20,
                  fontWeight: "500",
                }}
              >
                Confirm Booking
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                alignSelf: "center",
                justifyContent: "center",
                height: "30%",
                width: "70%",
                marginTop: "8%",
                backgroundColor: "black",
                borderRadius: 5,
              }}
              onPress={() => {
                setMdVisible(false);
              }}
            >
              <Text
                style={{
                  alignSelf: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: 20,
                  fontWeight: "500",
                }}
              >
                Close
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
}
const styles = StyleSheet.create({
  textHeading: {
    paddingTop: "2%",
    fontSize: 22,
    marginLeft: "5%",
    fontWeight: "600",
    color: "#fff",
  },
  text: {
    paddingTop: "1%",
    fontSize: 18,
    fontWeight: "500",
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
