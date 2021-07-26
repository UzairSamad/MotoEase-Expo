import React, { useState } from "react";
import {
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
  View,
  TextInput,
  Image,
  Modal,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import SearchableDropdown from "react-native-searchable-dropdown";
import colors from "../config/colors";
import Button from "../components/Button";
import db from "../db/00firebase";

export default function Services({ navigation, route }) {
  return (
    <View>
      <Text>SERVICE</Text>
    </View>
  )
}
//   console.log("route", route);
//   const mobile = route.params.mobile;
//   const vehicle = route.params.item.title;
//   const type = route.params.item.type;
//   const fuel = route.params.item.sub;
//   const year = route.params.item.ssub;
//   const num = route.params.item.num;
//   const userId = route.params.userId;
//   const dbRef = db
//     .collection("User")
//     .doc(userId)
//     .collection("MyAddress")
//     .doc("address").set;
//   const [location, setLocation] = useState("Select Location");
//   const [modalVisible, setModalVisible] = useState(false);
//   const cities = [
//     { id: 1, name: "Agra" },
//     { id: 2, name: "Ambala" },
//     { id: 3, name: "Amritsar" },
//     { id: 4, name: "Bhatinda" },
//     { id: 5, name: "Chandigarh" },
//     { id: 6, name: "Jalandhar" },
//     { id: 7, name: "Ludhiana" },
//     { id: 8, name: "Mohali" },
//     { id: 9, name: "Panchkula" },
//     { id: 10, name: "Patiala" },
//     { id: 11, name: "Jaipur" },
//   ];
//   const [word, setWord] = useState();
//   const [pincode, setPincode] = useState();

//   const [city, setCity] = useState();

//   function renderHeader() {
//     return (
//       <View style={styles.header}>
//         <TouchableOpacity
//           style={{ width: "10%" }}
//           onPress={() => navigation.navigate("Home", { userId: userId })}
//         >
//           <Image
//             source={require("../assets/images/user.png")}
//             resizeMode="contain"
//             style={styles.headerImage}
//           />
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={styles.headerMid}
//           onPress={() => setModalVisible(true)}
//         >
//           <Text style={{ fontSize: 20 }}>{location}</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={{ width: "10%" }}
//           onPress={() => navigation.navigate("MyVehicle")}
//         >
//           <Image
//             source={{
//               uri:
//                 "https://firebasestorage.googleapis.com/v0/b/motoease-11396.appspot.com/o/samcar.png?alt=media&token=1c0296ac-2071-4a71-ac1c-7232025c2fc1",
//             }}
//             resizeMode="contain"
//             style={styles.headerImage}
//           />
//         </TouchableOpacity>
//       </View>
//     );
//   }
//   function rendermid() {
//     return (
//       <View style={styles.mid}>
//         <View style={styles.midTextView}>
//           <Text style={styles.vehicle}>{vehicle}</Text>
//           <Text style={styles.vehicle}>{fuel}</Text>
//           <Text style={styles.vehicle}>{year}</Text>
//           <Text style={styles.vehicle}>{num}</Text>
//         </View>
//         <View style={{ height: "100%" }}>
//           <TouchableOpacity
//             style={styles.TOmidWideImage}
//             onPress={() => {
//               if (location == null || pincode == null || city == null) {
//                 alert("Please Select Location First");
//                 return;
//               } else {
//                 alert("Please Select Service Category");
//                 return;
//               }
//             }}
//           >
//             <Image
//               source={{
//                 uri:
//                   "https://firebasestorage.googleapis.com/v0/b/motoease-11396.appspot.com/o/emergency.png?alt=media&token=d40284db-f0cf-48a8-9106-33591d6b89cf",
//               }}
//               resizeMode="center"
//               style={styles.midWideImage}
//             />
//           </TouchableOpacity>

//           <View style={styles.midImageView}>
//             <TouchableOpacity
//               style={{ width: "48%" }}
//               onPress={() => {
//                 if (location == null || pincode == null || city == null) {
//                   alert("Please Select Location First");

//                   return;
//                 } else
//                   navigation.navigate("emergency", {
//                     v: vehicle,
//                     t: type,
//                     f: fuel,
//                     y: year,
//                     n: num,
//                     l: location,
//                     c: city,
//                     p: pincode,
//                     m: mobile,
//                     service: "Cleaning Services",
//                     userId: userId,
//                   });
//               }}
//             >
//               <Image
//                 source={{
//                   uri:
//                     "https://firebasestorage.googleapis.com/v0/b/motoease-11396.appspot.com/o/1.png?alt=media&token=af5e8d10-d2cf-4a47-a943-c4792f41cec6",
//                 }}
//                 resizeMode="center"
//                 style={styles.midImage}
//               />
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={{ width: "48%" }}
//               onPress={() => {
//                 if (location == null || pincode == null || city == null) {
//                   alert("Please Select Location First");
//                   return;
//                 } else
//                   navigation.navigate("emergency", {
//                     v: vehicle,
//                     t: type,
//                     f: fuel,
//                     y: year,
//                     n: num,
//                     l: location,
//                     c: city,
//                     p: pincode,
//                     m: mobile,
//                     service: "General Services",
//                     userId: userId,
//                   });
//               }}
//             >
//               <Image
//                 source={{
//                   uri:
//                     "https://firebasestorage.googleapis.com/v0/b/motoease-11396.appspot.com/o/2.png?alt=media&token=d8386237-f89f-4035-8a82-7fd2cce3e7be",
//                 }}
//                 resizeMode="center"
//                 style={styles.midImage}
//               />
//             </TouchableOpacity>
//           </View>
//           <View style={styles.midImageView}>
//             <TouchableOpacity
//               style={{ width: "48%" }}
//               onPress={() => {
//                 if (location == null || pincode == null || city == null) {
//                   alert("Please Select Location First");
//                   return;
//                 } else
//                   navigation.navigate("emergency", {
//                     v: vehicle,
//                     t: type,
//                     f: fuel,
//                     y: year,
//                     n: num,
//                     l: location,
//                     c: city,
//                     p: pincode,
//                     m: mobile,
//                     service: "Body Works",
//                     userId: userId,
//                   });
//               }}
//             >
//               <Image
//                 source={{
//                   uri:
//                     "https://firebasestorage.googleapis.com/v0/b/motoease-11396.appspot.com/o/3.png?alt=media&token=fde2919a-6f77-4311-b42a-6e66ae062506",
//                 }}
//                 resizeMode="center"
//                 style={styles.midImage}
//               />
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={{ width: "48%" }}
//               onPress={() => {
//                 if (location == null || pincode == null || city == null) {
//                   alert("Please Select Location First");
//                   return;
//                 } else
//                   navigation.navigate("emergency", {
//                     v: vehicle,
//                     t: type,
//                     f: fuel,
//                     y: year,
//                     n: num,
//                     l: location,
//                     c: city,
//                     p: pincode,
//                     service: "Tyres & Batteries",
//                     m: mobile,
//                     userId: userId,
//                   });
//               }}
//             >
//               <Image
//                 source={{
//                   uri:
//                     "https://firebasestorage.googleapis.com/v0/b/motoease-11396.appspot.com/o/4.png?alt=media&token=b1b6847f-6137-4e05-b574-ee52f43797cc",
//                 }}
//                 resizeMode="center"
//                 style={styles.midImage}
//               />
//             </TouchableOpacity>
//           </View>
//           <View style={styles.midImageView}>
//             <TouchableOpacity
//               style={{ width: "48%", justifyContent: "center" }}
//               onPress={() => {
//                 if (location == null || pincode == null || city == null) {
//                   alert("Please Select Location First");
//                   return;
//                 } else
//                   navigation.navigate("emergency", {
//                     v: vehicle,
//                     t: type,
//                     f: fuel,
//                     y: year,
//                     n: num,
//                     l: location,
//                     c: city,
//                     p: pincode,
//                     m: mobile,
//                     service: "Glass Work",
//                     userId: userId,
//                   });
//               }}
//             >
//               <Image
//                 source={{
//                   uri:
//                     "https://firebasestorage.googleapis.com/v0/b/motoease-11396.appspot.com/o/5.png?alt=media&token=4774365c-bd92-4cda-bd9c-0f8a0185095a",
//                 }}
//                 resizeMode="contain"
//                 style={styles.midImage}
//               />
//             </TouchableOpacity>
//           </View>

//           <TouchableOpacity
//             style={styles.TOmidWideImage}
//             onPress={() => {
//               if (location == null || pincode == null || city == null) {
//                 alert("Please Select Location First");
//                 return;
//               } else {
//                 alert("Please Select Service Category");
//                 return;
//               }
//             }}
//           >
//             <Image
//               source={{
//                 uri:
//                   "https://firebasestorage.googleapis.com/v0/b/motoease-11396.appspot.com/o/nearbytext.png?alt=media&token=c2ae7b61-9dc3-4ed5-9912-04c4e49125c9",
//               }}
//               resizeMode="center"
//               style={styles.midWideImage}
//             />
//           </TouchableOpacity>
//         </View>
//       </View>
//     );
//   }

//   return (
//     <>
//       <View style={styles1.container}>
//         {renderHeader()}
//         {rendermid()}
//       </View>
//       <Modal
//         backgroundColor="#f4f4f4"
//         visible={modalVisible}
//         animationType="slide"
//       >
//         <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
//           <KeyboardAvoidingView behavior="padding">
//             <View style={{ marginTop: "15%" }}>
//               <Text style={styles.ModalHeadingText}>Enter Full Address</Text>
//               <TextInput
//                 style={styles.modalInputText}
//                 placeholder="Enter full Address here"
//                 onChangeText={(add) => {
//                   setWord(add);
//                 }}
//                 value={word}
//               ></TextInput>
//               <Text style={styles.ModalHeadingText}>Enter Pin Code</Text>
//               <View>
//                 <TextInput
//                   style={styles.modalInputText}
//                   keyboardType="numeric"
//                   placeholder="eg.123456"
//                   onChangeText={setPincode}
//                   value={pincode}
//                 />
//               </View>

//               <Text style={styles.ModalHeadingText}>City</Text>
//               <SearchableDropdown
//                 onTextChange={(text) => console.log(text)}
//                 selectedItems={city}
//                 onItemSelect={(c) => setCity(c)}
//                 containerStyle={styles.containerStyle}
//                 textInputStyle={styles.modalInputText}
//                 itemStyle={styles.itemStyle}
//                 itemTextStyle={styles.itemTextStyle}
//                 itemsContainerStyle={styles.itemsContainerStyle}
//                 items={cities}
//                 defaultIndex={"eg: Petrol"}
//                 placeholder="eg: Chandigarh"
//                 resetValue={false}
//               />
//               <Text style={styles.ModalHeadingText}>Mobile No.</Text>
//               <Text style={styles.ModalHeadingText}>{mobile}</Text>

//               <Button
//                 title="Save"
//                 onPress={() => {
//                   if (word == null || pincode == null || city == null) {
//                     alert("Please add full details");
//                     return;
//                   } else;
//                   setLocation(word);
//                   setModalVisible(false);
//                 }}
//               />
//               <View style={{ marginTop: "10%" }}>
//                 <Button
//                   title="Close"
//                   onPress={() => {
//                     setModalVisible(false);
//                   }}
//                 />
//               </View>
//             </View>
//           </KeyboardAvoidingView>
//         </TouchableWithoutFeedback>
//       </Modal>
//     </>
//   );
// }
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 10,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  header: {
    paddingLeft: "2%",
    paddingRight: "5%",
    height: "12.6%",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingTop: "12%",
    backgroundColor: colors.primary,
  },
  headerImage: {
    width: 50,
    height: 50,
  },
  headerMid: {
    width: "60%",
    height: "80%",
    backgroundColor: "#f1f1f1",
    borderRadius: 5,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  mid: { height: "80%", marginTop: "2%" },
  midTextView: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: "2%",
    paddingRight: "2%",
  },
  vehicle: { fontSize: 15, marginTop: 2, fontWeight: "500" },
  midImageView: {
    alignSelf: "center",
    height: "25%",
    flexDirection: "row",
  },
  TOmidWideImage: {
    margin: "5%",
    width: "80%",
    alignSelf: "center",
    borderRadius: 5,
  },
  midWideImage: { borderRadius: 5, width: "100%", height: 50 },
  midImage: {
    width: "100%",
    height: "100%",
  },
  ModalHeadingText: {
    marginLeft: 5,
    padding: 10,
    fontSize: 16,
    fontWeight: "500",
  },
  modalInputText: {
    marginTop: 2,
    fontSize: 15,
    marginBottom: 30,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#FAF7F6",
    borderRadius: 5,
    width: "95%",
    alignSelf: "center",
  },

  itemStyle: {
    padding: 8,
    marginTop: 2,
    backgroundColor: "#FAF9F8",
    borderColor: "#bbb",
    borderWidth: 1,
  },
  itemTextStyle: { color: "#100" },
  itemsContainerStyle: { maxHeight: 100 },
  containerStyle: { padding: 1 },
});
const styles1 = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
});
