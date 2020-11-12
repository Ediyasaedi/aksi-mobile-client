import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function SwitcherQnA({ text }) {
  return (
    <TouchableOpacity style={styles.button}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    width: 325,
  },
  countContainer: {
    alignItems: "center",
    padding: 10,
  },
});
