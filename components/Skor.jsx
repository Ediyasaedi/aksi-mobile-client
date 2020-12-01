import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Badge, Icon } from "react-native-elements";

export default function Skor({ title, skor, date }) {
  return (
    <View style={styles.toQuestions}>
      <Text style={styles.baseText}>{title} : </Text>
      <View style={{ flexDirection: "row", padding: 5 }}>
        <Badge
          status="error"
          value={skor}
          textStyle={styles.innerText}
          containerStyle={styles.textContainer}
        />
        <Icon
          name="trash"
          type="font-awesome"
          color="#f50"
          onPress={() => alert(date)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginEnd: 20,
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
