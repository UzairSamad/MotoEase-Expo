import * as React from "react";
import { useState, useRef } from "react";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import firebase from "../db/setup";
import {
  Text,
  Image,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
} from "react-native";

import PhoneInput from "react-native-phone-number-input";
import colors from "../config/colors";
import Button from "../components/Button";
import AsyncStorage from "@react-native-async-storage/async-storage";


export const AuthContext = React.createContext();
export default function Page0({ navigation }) {
  const [phoneNumber, setPhoneNumber] = React.useState();
  const [value, setValue] = useState("");
  const [verificationId, setVerificationId] = React.useState();
  const [verificationCode, setVerificationCode] = React.useState();
  const phoneInput = useRef(null);


  const firebaseConfig = firebase.apps.length
    ? firebase.app().options
    : undefined;
  const [message, showMessage] = React.useState(
    !firebaseConfig || Platform.OS === "web"
      ? {
        text: "download our app from Play Store/ App Store",
      }
      : undefined
  );
  const recaptchaVerifier = React.useRef(null);
  const attemptInvisibleVerification = true;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <View
            style={{
              flex: 3,
              backgroundColor: colors.primary,
              borderBottomLeftRadius: 15,
              borderBottomRightRadius: 15,
            }}
          >
            <Image
              source={{
                uri:
                  "https://firebasestorage.googleapis.com/v0/b/motoease-11396.appspot.com/o/MotoEase-2.png?alt=media&token=1fe4cc7a-ca7d-403d-9a82-4d0e52b379e3",
              }}
              resizeMode="center"
              style={{
                marginTop: "15%",
                width: "90%",
                height: "90%",
                justifyContent: "center",
                alignSelf: "center",
              }}
            />
          </View>

          <FirebaseRecaptchaVerifierModal
            ref={recaptchaVerifier}
            firebaseConfig={firebaseConfig}
            attemptInvisibleVerification={attemptInvisibleVerification}
          />
          <View style={{ flex: 5 }}>
            <Text style={styles.text}>Enter Phone Number</Text>
            <View style={{ justifyContent: "center", alignSelf: "center" }}>
              <PhoneInput
                ref={phoneInput}
                defaultValue={value}
                defaultCode="IN"
                layout="second"
                onChangeText={(text) => {
                  setValue(text);
                }}
                onChangeFormattedText={(text) => {
                  setPhoneNumber(text);
                }}
                withDarkTheme
                withShadow
                autoFocus
              />
            </View>
            <Button
              title="Send Verification Code"
              disabled={!phoneNumber}
              onPress={async () => {
                if (phoneNumber.length < 10) {
                  showMessage({ text: "Please Enter 10 Digit Mobile Number" });
                } else
                  try {
                    const phoneProvider = new firebase.auth.PhoneAuthProvider();
                    const verificationId = await phoneProvider.verifyPhoneNumber(
                      phoneNumber,
                      recaptchaVerifier.current
                    );
                    setVerificationId(verificationId);
                    showMessage({
                      text: "Verification code has been sent to your phone.",
                    });
                  } catch (err) {
                    showMessage({
                      text: `Error: ${err.message}`,
                      color: "red",
                    });
                  }
              }}
            />

            <Text style={styles.text}>Enter Verification Code</Text>
            <TextInput
              style={{
                height: 45,
                width: "80%",
                borderColor: "black",

                borderWidth: 0.2,
                marginLeft: "10%",
                padding: 10,
                fontSize: 18,
              }}
              keyboardType="numeric"
              editable={!!verificationId}
              placeholder="123456"
              onChangeText={setVerificationCode}
            />
            <Button
              title="Confirm Verification Code"
              color="white"
              TextColor="primary"
              onPress={async () => {
                try {
                  const credential = firebase.auth.PhoneAuthProvider.credential(
                    verificationId,
                    verificationCode
                  );
                  await firebase
                    .auth()
                    .signInWithCredential(credential)
                    .then(() => {
                      const userId = firebase.auth().currentUser.uid;
                      AsyncStorage.setItem('uid', userId);
                      navigation.navigate("App", {
                        screen: 'MyVehicle',
                        userId: userId,
                        mobile: phoneNumber,
                      });
                    });
                } catch (err) {
                  showMessage({ text: `Error: ${err.message}`, color: "red" });
                }
              }}
            />
          </View>

          {message ? (
            <TouchableOpacity
              style={[
                StyleSheet.absoluteFill,
                { backgroundColor: 0xffffffee, justifyContent: "center" },
              ]}
              onPress={() => showMessage(undefined)}
            >
              <Text
                style={{
                  color: message.color || "blue",
                  fontSize: 17,
                  textAlign: "center",
                  margin: 20,
                }}
              >
                {message.text}
              </Text>
            </TouchableOpacity>
          ) : (
            undefined
          )}
          {attemptInvisibleVerification}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  TO: {
    marginTop: 10,
    width: "80%",
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: colors.primary,
  },
  TOtext: {
    justifyContent: "center",
    alignSelf: "center",
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  text: {
    marginTop: 30,
    fontSize: 16,
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 10,
    textTransform: "uppercase",
    fontWeight: "500",
  },
});
