import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function ResultPage({ navigation: { navigate } }) {
  return (
    <View style={styles.textContainer}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          padding: 10,
        }}
      >
        <Text style={styles.baseText}>
          Kamu telah menyelesaikan wacana:{" "}
          <Text style={styles.innerText}>Hoaks</Text>
        </Text>
        <Text style={styles.baseText}>
          Skor kamu: <Text style={styles.innerText}>80</Text>
        </Text>
      </View>
      <View style={styles.toQuestions}>
        <TouchableOpacity
          style={styles.btnStyles}
          onPress={() => navigate("Profile")}
        >
          <Text style={{ color: "white" }}>Simpan</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnStyles}
          onPress={() => navigate("ReviewPage")}
        >
          <Text style={{ color: "white" }}>Coba Lagi</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    flex: 1,
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
    color: "red",
  },
  articleContainer: {
    justifyContent: "center",
    alignContent: "center",
  },
  toQuestions: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 30,
    margin: 10,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btnStyles: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
    margin: 10,
    borderRadius: 10,
    flex: 1,
    backgroundColor: "red",
  },
});
