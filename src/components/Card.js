import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Image } from "react-native-expo-image-cache";

import Text from "./Text";
import colors from "../config/colors";
import { TouchableOpacity } from "react-native-gesture-handler";

function Card({
  title,
  sub,
  ssub,
  onPress,
  num,
  type,
  service,
  status,
  firm,
  mobile,
}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <View style={styles.detailsContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          <Text style={styles.subTitle} numberOfLines={2}>
            {firm}
          </Text>
          <Text style={styles.subTitle} numberOfLines={2}>
            {sub}
          </Text>
          <Text style={styles.subTitle} numberOfLines={2}>
            {ssub}
          </Text>
          <Text style={styles.subTitle} numberOfLines={2}>
            {num}
          </Text>
          <Text style={styles.subTitle} numberOfLines={2}>
            {type}
          </Text>
          <Text style={styles.subTitle} numberOfLines={2}>
            {service}
          </Text>
          <Text style={styles.subTitle} numberOfLines={2}>
            {mobile}
          </Text>
          <Text style={styles.status} numberOfLines={2}>
            {status}
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
    marginBottom: 20,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 20,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  title: {
    marginBottom: 7,
    fontSize: 20,
    color: "green",
    fontWeight: "500",
  },
  status: {
    fontSize: 14,
    fontWeight: "bold",
    color: "red",
  },
});

export default Card;
