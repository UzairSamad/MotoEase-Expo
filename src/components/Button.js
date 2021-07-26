import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import colors from "../config/colors";

function AppButton({
  title,
  onPress,
  disabled,
  color = "primary",
  TextColor = "white",
}) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: colors[color], borderColor: colors[TextColor] },
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={[styles.text, { color: colors[TextColor] }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    width: "80%",
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: colors.primary,
    borderWidth: 1,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    justifyContent: "center",
    alignSelf: "center",
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default AppButton;
