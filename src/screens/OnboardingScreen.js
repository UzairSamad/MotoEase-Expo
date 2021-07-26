import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

import Onboarding from "react-native-onboarding-swiper";
const Dots = ({ selected }) => {
  let backgroundColor;

  backgroundColor = selected ? "rgba(0, 0, 0, 0.8)" : "rgba(0, 0, 0, 0.3)";

  return (
    <View
      style={{
        width: 6,
        height: 6,
        marginHorizontal: 3,
        backgroundColor,
      }}
    />
  );
};

const Skip = ({ ...props }) => (
  <TouchableOpacity style={{ marginHorizontal: 10 }} {...props}>
    <Text style={{ fontSize: 16 }}>Skip</Text>
  </TouchableOpacity>
);

const Next = ({ ...props }) => (
  <TouchableOpacity style={{ marginHorizontal: 10 }} {...props}>
    <Text style={{ fontSize: 16 }}>Next</Text>
  </TouchableOpacity>
);

const Done = ({ ...props }) => (
  <TouchableOpacity style={{ marginHorizontal: 10 }} {...props}>
    <Text style={{ fontSize: 16 }}>Done</Text>
  </TouchableOpacity>
);

const OnboardingScreen = ({ navigation }) => {
  return (
    <Onboarding
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      DotComponent={Dots}
      onSkip={() => navigation.replace("Page1")}
      onDone={() => navigation.navigate("Page1")}
      pages={[
        {
          backgroundColor: "#a6e4d0",
          image: (
            <Image
              source={{
                uri:
                  "https://firebasestorage.googleapis.com/v0/b/motoease-11396.appspot.com/o/s1.png?alt=media&token=8ec1e9ef-7853-4ff9-899f-0fc1050e3fdc",
              }}
              style={{ height: "80%", width: "80%" }}
            />
          ),
          title: "",
          subtitle: "",
        },
        {
          backgroundColor: "#fdeb93",
          image: (
            <Image
              source={{
                uri:
                  "https://firebasestorage.googleapis.com/v0/b/motoease-11396.appspot.com/o/s2.png?alt=media&token=6e15ea54-291a-41b3-859b-8fd4d67a430a",
              }}
              style={{ height: "90%", width: "90%" }}
            />
          ),
          title: "",
          subtitle: "",
        },
        {
          backgroundColor: "#e9bcbe",
          image: (
            <Image
              source={{
                uri:
                  "https://firebasestorage.googleapis.com/v0/b/motoease-11396.appspot.com/o/s3.png?alt=media&token=41c78c6b-700c-47f9-8b9d-1e517f4ffbfc",
              }}
              style={{ height: "90%", width: "90%" }}
            />
          ),
          title: "",
          subtitle: "",
        },
      ]}
    />
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
