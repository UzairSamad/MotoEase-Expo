import React, { useState } from "react";
import Modal from "react-native-modal";
import SearchableDropdown from "react-native-searchable-dropdown";
import {
  StyleSheet,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import db from "../db/00firebase";

export default function spMyProfile({ navigation, route }) {
  const spId = route.params.spId;
  const dbRef = db.collection("sp").doc(spId);
  const [modalVisible, setModalVisible] = useState(false);
  const [firmNameS, setFirmNameS] = useState();
  const [ownerS, setOwnerS] = useState();
  const [mobileS, setMobileS] = useState();
  const [GSTs, setGSTs] = useState();
  const [addressS, setAddressS] = useState();
  const [pinS, setPinS] = useState();

  const [firmName, setFirmName] = useState(
    dbRef.get().then((docs) => {
      let _name = docs.get("firmName");
      setFirmName(_name);
    })
  );
  const [GST, setGST] = useState(
    dbRef.get().then((docs) => {
      let _name = docs.get("gst");
      setGST(_name);
    })
  );
  const [Owner, setOwnerName] = useState(
    dbRef.get().then((docs) => {
      let _name = docs.get("owner");
      setOwnerName(_name);
    })
  );
  const [mobile, setMobile] = useState(
    dbRef.get().then((docs) => {
      let _name = docs.get("mobile");
      setMobile(_name);
    })
  );
  const [Address, setAddress] = useState(
    dbRef.get().then((docs) => {
      let _name = docs.get("address");
      setAddress(_name);
    })
  );
  const [cityyy, setCityyy] = useState();
  const [city, setCity] = useState(
    dbRef.get().then((docs) => {
      let _name = docs.get("city");
      setCity(_name);
    })
  );
  const [pin, setPin] = useState(
    dbRef.get().then((docs) => {
      let _name = docs.get("pin");
      setPin(_name);
    })
  );

  const cities = [
    { id: 1, name: "Agra" },
    { id: 2, name: "Ambala" },
    { id: 3, name: "Amritsar" },
    { id: 4, name: "Bhatinda" },
    { id: 5, name: "Chandigarh" },
    { id: 6, name: "Jalandhar" },
    { id: 7, name: "Ludhiana" },
    { id: 8, name: "Mohali" },
    { id: 9, name: "Panchkula" },
    { id: 10, name: "Patiala" },
    { id: 11, name: "Jaipur" },
  ];
  return (
    <>
      <View style={{ width: "100%", height: "100%", marginTop: "20%" }}>
        <View style={{ flex: 1.5, backgroundColor: "red", padding: "3%" }}>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 40 }}>
            MotoEase
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ color: "white", fontSize: 30, fontWeight: "500" }}>
              My Profile
            </Text>

            <TouchableOpacity
              style={{
                marginLeft: "40%",
                height: 40,
                width: 40,
                justifyContent: "center",
                borderRadius: 5,
              }}
              onPress={() => setModalVisible(true)}
            >
              <Image
                source={{
                  uri:
                    "https://firebasestorage.googleapis.com/v0/b/motoease-11396.appspot.com/o/edit.jpeg?alt=media&token=e8ddeba1-d81e-4387-807d-94f5752f4530",
                }}
                style={{
                  width: 40,
                  height: 40,
                }}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flex: 10, backgroundColor: "white", marginLeft: 5 }}>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                fontSize: 20,
                marginTop: 5,
                width: "35%",
                fontWeight: "600",
              }}
            >
              Firm Name:
            </Text>
            <Text style={styles.inputText}>{firmName.toString()}</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.subText}>GST: </Text>
            <Text style={styles.inputText}>{GST.toString()}</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.subText}>Owner: </Text>
            <Text style={styles.inputText}>{Owner.toString()}</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.subText}>Mobile: </Text>
            <Text style={styles.inputText}>{mobile.toString()}</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.subText}>Address: </Text>
            <Text style={styles.inputText}>{Address.toString()}</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.subText}>City: </Text>
            <Text style={styles.inputText}>{city.toString()}</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.subText}>Pincode: </Text>
            <Text style={styles.inputText}>{pin.toString()}</Text>
          </View>

          <TouchableOpacity
            style={{
              height: "10%",
              backgroundColor: "black",
              width: "90%",
              borderRadius: 10,
              justifyContent: "center",
              alignSelf: "center",
              marginTop: "10%",
            }}
            onPress={() => {
              navigation.navigate("sp1", {
                spId: spId,
              });
            }}
          >
            <Text
              style={{
                color: "#f1f1f1",
                fontSize: 25,
                justifyContent: "center",
                alignSelf: "center",
              }}
            >
              Save and Proceed
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Modal
        style={{
          marginTop: "20%",
          marginBottom: "20%",
        }}
        backgroundColor="white"
        backdropColor="green"
        visible={modalVisible}
        animationIn="slideInUp"
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <KeyboardAvoidingView behavior="padding">
            <View style={{ marginLeft: 8, marginRight: 8 }}>
              <TouchableOpacity
                style={{
                  height: 30,
                  backgroundColor: "black",
                  width: "40%",
                  borderRadius: 10,
                  justifyContent: "center",
                  alignSelf: "center",
                  marginTop: "10%",
                  marginBottom: "5%",
                }}
                onPress={() => {
                  setModalVisible(false);
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 18,
                    fontWeight: "500",
                    justifyContent: "center",
                    alignSelf: "center",
                  }}
                >
                  Close
                </Text>
              </TouchableOpacity>
              <Text style={{ fontSize: 20, marginTop: 5, fontWeight: "600" }}>
                Enter your Details here
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.ModalText}>Firm Name</Text>
                <TextInput
                  style={styles.modalInput}
                  placeholder="Enter Firm Name Here"
                  onChangeText={(numb) => {
                    setFirmNameS(numb);
                  }}
                />
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.ModalText}>Owner Name</Text>
                <TextInput
                  style={styles.modalInput}
                  placeholder="Enter Owner Name Here"
                  onChangeText={(numb) => {
                    setOwnerS(numb);
                  }}
                />
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.ModalText}>GSTNo. (Optional) </Text>

                <TextInput
                  style={styles.modalInput}
                  placeholder="Enter GST No. Here"
                  onChangeText={(numb) => {
                    setGSTs(numb);
                  }}
                />
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.ModalText}>Mobile No.</Text>
                <TextInput
                  style={styles.modalInput}
                  placeholder="Enter Mobile No. Here"
                  keyboardType="name-phone-pad"
                  onChangeText={(numb) => {
                    setMobileS(numb);
                  }}
                />
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.ModalText}>Address</Text>
                <TextInput
                  style={styles.modalInput}
                  placeholder="Enter Address Here"
                  onChangeText={(numb) => {
                    setAddressS(numb);
                  }}
                />
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.ModalText}>City</Text>
                <SearchableDropdown
                  onTextChange={(text) => console.log(text)}
                  selectedItems={cityyy}
                  onItemSelect={(city) => setCityyy(city)}
                  containerStyle={{ padding: 2 }}
                  textInputStyle={{
                    marginTop: 8,
                    marginBottom: 6,
                    width: 200,
                    borderRadius: 10,
                    fontSize: 18,
                    padding: 5,
                    borderWidth: 1,
                    borderColor: "#ccc",
                    backgroundColor: "#FAF7F6",
                  }}
                  itemStyle={{
                    padding: 5,
                    marginTop: 2,
                    backgroundColor: "#FAF9F8",
                    borderColor: "#bbb",
                    borderWidth: 1,
                  }}
                  itemTextStyle={{
                    color: "#222",
                    fontSize: 18,
                  }}
                  itemsContainerStyle={{
                    maxHeight: "70%",
                  }}
                  items={cities}
                  defaultIndex={"eg: Petrol"}
                  placeholder="Select City from List"
                  resetValue={false}
                />
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.ModalText}>Pincode</Text>
                <TextInput
                  style={styles.modalInput}
                  placeholder="Enter Pincode Here"
                  onChangeText={(numb) => {
                    setPinS(numb);
                  }}
                />
              </View>
              <TouchableOpacity
                style={{
                  height: "8%",
                  backgroundColor: "black",
                  width: "80%",
                  borderRadius: 10,
                  justifyContent: "center",
                  alignSelf: "center",
                  marginTop: "10%",
                }}
                onPress={() => {
                  if (
                    firmName == null ||
                    Owner == null ||
                    mobile == null ||
                    Address == null ||
                    pin == null ||
                    cityyy == null
                  ) {
                    alert("Please add full details");
                    return;
                  } else {
                    dbRef
                      .set({
                        firmName: firmNameS,
                        owner: ownerS,
                        gst: GSTs,
                        mobile: mobileS,
                        key: mobileS,
                        address: addressS,
                        pin: pinS,
                        city: cityyy.name,
                      })
                      .then(() => {
                        setModalVisible(false);
                      });
                  }
                }}
              >
                <Text
                  style={{
                    color: "#f1f1f1",
                    fontSize: 22,
                    justifyContent: "center",
                    alignSelf: "center",
                  }}
                >
                  Save Data
                </Text>
              </TouchableOpacity>
              <Text
                style={{
                  marginTop: 10,
                  fontSize: 18,
                  justifyContent: "center",
                  alignSelf: "center",
                }}
              >
                City not in the list?
              </Text>
              <Text
                style={{
                  marginTop: 3,
                  fontSize: 18,
                  justifyContent: "center",
                  alignSelf: "center",
                }}
              >
                WhatsApp us @90415 80983
              </Text>
            </View>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
}
const styles = StyleSheet.create({
  subText: {
    width: "35%",
    fontSize: 20,
    marginTop: 5,
    fontWeight: "600",
  },
  box: {
    height: "30%",
    width: "90%",
    backgroundColor: "white",
    flexDirection: "row",
    marginTop: 3,
    borderRadius: 10,
  },
  edit: {
    alignSelf: "center",
    height: "100%",
    width: "15%",
    justifyContent: "center",
    backgroundColor: "black",
    borderRadius: 5,
  },
  editText: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    color: "#f1f1f1",
    fontWeight: "600",
  },
  inputText: {
    width: "60%",
    marginTop: 2,
    fontSize: 20,
    marginBottom: 5,

    borderRadius: 10,
  },
  modalInput: {
    width: "60%",
    marginTop: 10,
    fontSize: 20,
    padding: 3,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#FAF7F6",
    borderRadius: 6,
  },
  ModalText: {
    width: "30%",
    marginRight: 2,
    marginTop: 10,
    fontSize: 16,
  },
});
