import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Badge } from "react-native-elements";

export default function Skor({ title, skor }) {
  return (
    <View style={styles.toQuestions}>
      <Text style={styles.baseText}>{title} : </Text>
      <Badge
        status="error"
        value={skor}
        textStyle={styles.innerText}
        containerStyle={styles.textContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  baseText: {
    fontWeight: "bold",
    fontSize: 20,
    justifyContent: "center",
    textAlign: "center",
  },
  innerText: {
    fontSize: 16,
    margin: 20,
    fontWeight: "bold",
  },
  toQuestions: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    width: 350,
  },
});
