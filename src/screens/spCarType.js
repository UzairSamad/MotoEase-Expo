import React, { useState } from "react";
import Modal from "react-native-modal";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import db from "../db/00firebase";
export default function spCarType({ navigation, route }) {
  const spId = route.params.spId;
  const category = route.params.category;
  const service = route.params.item.title;
  const priceRef = db.collection("services").doc(service);
  const dbRef = db.collection("sp").doc(spId);
  const [firmName, setFirmName] = useState(
    dbRef.get().then((docs) => {
      let _name = docs.get("firmName");
      setFirmName(_name);
    })
  );
  const [address, setAddress] = useState(
    dbRef.get().then((docs) => {
      let _name = docs.get("address");
      setAddress(_name);
    })
  );
  const [pin, setPin] = useState(
    dbRef.get().then((docs) => {
      let _name = docs.get("pin");
      setPin(_name);
    })
  );

  const callBackPrice = () => {
    priceRef
      .collection("Hatchback")
      .doc(spId)
      .get()
      .then((docs) => {
        if (!docs.exists) {
          setPrice("NA");
        } else {
          priceRef
            .collection("Hatchback")
            .doc(spId)
            .get()
            .then((docs) => {
              let _name = docs.get("price");
              setPrice(_name);
            });
        }
      });
  };
  const callBackPrice1 = () => {
    priceRef
      .collection("Sedan")
      .doc(spId)
      .get()
      .then((docs) => {
        if (!docs.exists) {
          setPrice1("NA");
        } else {
          priceRef
            .collection("Sedan")
            .doc(spId)
            .get()
            .then((docs) => {
              let _name = docs.get("price");
              setPrice1(_name);
            });
        }
      });
  };
  const callBackPrice2 = () => {
    priceRef
      .collection("MUV")
      .doc(spId)
      .get()
      .then((docs) => {
        if (!docs.exists) {
          setPrice2("NA");
        } else {
          priceRef
            .collection("MUV")
            .doc(spId)
            .get()
            .then((docs) => {
              let _name = docs.get("price");
              setPrice2(_name);
            });
        }
      });
  };
  const callBackPrice3 = () => {
    priceRef
      .collection("Luxury")
      .doc(spId)
      .get()
      .then((docs) => {
        if (!docs.exists) {
          setPrice3("NA");
        } else {
          priceRef
            .collection("Luxury")
            .doc(spId)
            .get()
            .then((docs) => {
              let _name = docs.get("price");
              setPrice3(_name);
            });
        }
      });
  };
  const [price, setPrice] = useState(callBackPrice);
  const [price1, setPrice1] = useState(callBackPrice1);
  const [price2, setPrice2] = useState(callBackPrice2);
  const [price3, setPrice3] = useState(callBackPrice3);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisible1, setIsModalVisible1] = useState(false);
  const [isModalVisible2, setIsModalVisible2] = useState(false);
  const [isModalVisible3, setIsModalVisible3] = useState(false);

  return (
    <>
      <View style={{ marginTop: "15%" }}>
        <View style={{ width: "100%" }}>
          <Text style={styles.TextHead}>{category}</Text>
          <Text style={styles.TextHead}>{service}</Text>
        </View>
        <ScrollView
          style={{
            width: "100%",
            backgroundColor: "#f2f2f2",
            height: "80%",
          }}
        >
          <TouchableOpacity
            style={styles.TH}
            onPress={() => setIsModalVisible(true)}
          >
            <Text style={styles.TextHead}>Hatchback</Text>
            <Text style={styles.TextSub}>Rs. {price}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TH}
            onPress={() => setIsModalVisible1(true)}
          >
            <Text style={styles.TextHead}>Sedan</Text>
            <Text style={styles.TextSub}>Rs. {price1}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TH}
            onPress={() => setIsModalVisible2(true)}
          >
            <Text style={styles.TextHead}>MUV</Text>
            <Text style={styles.TextSub}>Rs. {price2}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TH}
            onPress={() => setIsModalVisible3(true)}
          >
            <Text style={styles.TextHead}>Luxury</Text>
            <Text style={styles.TextSub}>Rs. {price3}</Text>
          </TouchableOpacity>
        </ScrollView>
        <View>
          <TouchableOpacity
            style={{
              width: "60%",
              height: "30%",
              justifyContent: "center",
              alignSelf: "center",
              backgroundColor: "black",
              borderRadius: 10,
            }}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.textTO}>Save and Proceed</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Modal
        animationIn="slideInUp"
        visible={isModalVisible}
        style={{ backgroundColor: "white" }}
      >
        <View style={styles.ModalView}>
          <Text style={styles.TextHead}>{service}</Text>
          <Text style={styles.TextSub}>Hatchback</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.TextSub}>Rs.</Text>
            <TextInput
              style={styles.priceInput}
              onChangeText={setPrice}
              value={price}
            ></TextInput>
          </View>
          <TouchableOpacity
            style={styles.savePrice}
            onPress={() => {
              setIsModalVisible(false),
                priceRef
                  .collection("Hatchback")
                  .doc(spId)
                  .set(
                    {
                      firmName: firmName,
                      address: address,
                      key: spId,
                      pincode: pin,
                      price: price,
                    },
                    { merge: true }
                  );
            }}
          >
            <Text style={styles.textTO}>Save</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <Modal
        animationIn="slideInUp"
        visible={isModalVisible1}
        style={{ backgroundColor: "white" }}
      >
        <View style={styles.ModalView}>
          <Text style={styles.TextHead}>{service}</Text>
          <Text style={styles.TextSub}>Sedan</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.TextSub}>Rs.</Text>
            <TextInput
              style={styles.priceInput}
              onChangeText={setPrice1}
              value={price1}
            ></TextInput>
          </View>
          <TouchableOpacity
            style={styles.savePrice}
            onPress={() => {
              setIsModalVisible1(false),
                priceRef
                  .collection("Sedan")
                  .doc(spId)
                  .set(
                    {
                      firmName: firmName,
                      address: address,
                      key: spId,
                      pincode: pin,
                      price: price1,
                    },
                    { merge: true }
                  );
            }}
          >
            <Text style={styles.textTO}>Save</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <Modal
        animationIn="slideInUp"
        visible={isModalVisible2}
        style={{ backgroundColor: "white" }}
      >
        <View style={styles.ModalView}>
          <Text style={styles.TextHead}>{service}</Text>
          <Text style={styles.TextSub}>MUV</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.TextSub}>Rs.</Text>
            <TextInput
              style={styles.priceInput}
              onChangeText={setPrice2}
              value={price2}
            ></TextInput>
          </View>
          <TouchableOpacity
            style={styles.savePrice}
            onPress={() => {
              setIsModalVisible2(false),
                priceRef
                  .collection("MUV")
                  .doc(spId)
                  .set(
                    {
                      firmName: firmName,
                      address: address,
                      key: spId,
                      pincode: pin,
                      price: price2,
                    },
                    { merge: true }
                  );
            }}
          >
            <Text style={styles.textTO}>Save</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <Modal
        animationIn="slideInUp"
        visible={isModalVisible3}
        style={{ backgroundColor: "white" }}
      >
        <View style={styles.ModalView}>
          <Text style={styles.TextHead}>{service}</Text>
          <Text style={styles.TextSub}>Luxury</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.TextSub}>Rs.</Text>
            <TextInput
              style={styles.priceInput}
              onChangeText={setPrice3}
              value={price3}
            ></TextInput>
          </View>
          <TouchableOpacity
            style={styles.savePrice}
            onPress={() => {
              setIsModalVisible3(false),
                priceRef
                  .collection("Luxury")
                  .doc(spId)
                  .set(
                    {
                      address: address,
                      firmName: firmName,
                      key: spId,
                      pincode: pin,
                      price: price3,
                    },
                    { merge: true }
                  );
            }}
          >
            <Text style={styles.textTO}>Save</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </>
  );
}
const styles = StyleSheet.create({
  TextHead: { color: "black", fontSize: 24, fontWeight: "500", padding: 3 },
  TH: {
    justifyContent: "center",
    alignSelf: "center",
    height: "30%",
    width: "95%",
    marginTop: 10,
    borderRadius: 2,
    backgroundColor: "white",
  },
  TextSub: { color: "grey", fontSize: 20, fontWeight: "400", padding: 3 },
  ModalView: {
    padding: 30,
    borderRadius: 2,
    backgroundColor: "#f1f1f1",
    marginTop: "20%",
    maxHeight: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  priceInput: {
    borderBottomWidth: 1,
    borderColor: "black",
    maxHeight: 20,
    fontSize: 20,
    marginTop: 3,
    width: 80,
  },
  savePrice: {
    width: 70,
    height: 30,
    backgroundColor: "black",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: "20%",
  },
  textTO: {
    color: "white",
    fontSize: 20,
    justifyContent: "center",
    alignSelf: "center",
  },
});
