import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Image } from "react-native-expo-image-cache";

import Text from "./Text";
import colors from "../config/colors";
import { TouchableOpacity } from "react-native-gesture-handler";

function CardV({ title, sub, ssub, onPress, num }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <View style={styles.detailsContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingRight: "30%",
            }}
          >
            <Text style={styles.subTitle} numberOfLines={1}>
              {sub}
            </Text>
            <Text style={styles.subTitle} numberOfLines={1}>
              {ssub}
            </Text>
          </View>
          <Text style={styles.subTitle} numberOfLines={2}>
            {num}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 10,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 20,
  },
  subTitle: {
    fontSize: 18,
    color: "black",
    fontWeight: "bold",
  },
  title: {
    marginBottom: 7,
    fontSize: 20,
    color: colors.primary,
    fontWeight: "bold",
  },
  status: {
    fontSize: 14,
    fontWeight: "bold",
    color: "red",
  },
});

export default CardV;
