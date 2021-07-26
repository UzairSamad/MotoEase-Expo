import * as React from "react";
import { useState, useRef } from "react";
import {
  Text,
  Image,
  View,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import {
  FirebaseRecaptchaVerifierModal,
  FirebaseRecaptchaBanner,
} from "expo-firebase-recaptcha";
import PhoneInput from "react-native-phone-number-input";
import db from "../db/00firebase";
import firebase from "../db/setup";

export default function spLogin({ navigation }) {
  const recaptchaVerifier = React.useRef(null);
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
            backgroundColor: "#fff",
            marginTop: "10%",
          }}
        >
          <Image
            source={{
              uri:
                "https://firebasestorage.googleapis.com/v0/b/motoease-11396.appspot.com/o/MotoEase.png?alt=media&token=2564bd7b-a995-42ee-8b56-0ffb7dcf1d7e",
            }}
            resizeMode="center"
            style={{
              width: "90%",
              height: "30%",
              justifyContent: "center",
              alignSelf: "center",
            }}
          />
          <Text
            style={{
              justifyContent: "center",
              alignSelf: "center",
              fontSize: 20,
            }}
          >
            SERVICE PROVIDER LOGIN
          </Text>

          <FirebaseRecaptchaVerifierModal
            ref={recaptchaVerifier}
            firebaseConfig={firebaseConfig}
            attemptInvisibleVerification={attemptInvisibleVerification}
          />

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
          <TouchableOpacity
            style={styles.TO}
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
                  showMessage({ text: `Error: ${err.message}`, color: "red" });
                }
            }}
          >
            <Text style={styles.TOtext}>Send Verification Code</Text>
          </TouchableOpacity>

          <Text style={styles.text}>Enter Verification code</Text>
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
          <TouchableOpacity
            style={styles.TO}
            disabled={!verificationId}
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
                    const spId = firebase.auth().currentUser.uid;
                    const dbRef = db.collection("sp").doc(spId);
                    dbRef.get().then((docs) => {
                      if (!docs.exists) {
                        dbRef.set({
                          firmName: "",
                          owner: "",
                          gst: "",
                          mobile: "",
                          key: "",
                          address: "",
                          pin: "",
                          city: "",
                        });
                        navigation.navigate("spMyProfile", { spId: spId });
                      } else navigation.navigate("spMyProfile", { spId: spId });
                    });
                  });
              } catch (err) {
                showMessage({ text: `Error: ${err.message}`, color: "red" });
              }
            }}
          >
            <Text style={styles.TOtext}>Confirm Verification Code</Text>
          </TouchableOpacity>

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
          {attemptInvisibleVerification && <FirebaseRecaptchaBanner />}
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
    backgroundColor: "black",
  },
  TOtext: {
    justifyContent: "center",
    alignSelf: "center",
    fontSize: 20,
    color: "white",
  },
  text: {
    marginTop: 30,
    fontSize: 18,
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 10,
  },
});
