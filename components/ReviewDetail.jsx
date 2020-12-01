import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function ReviewDetail({ soal, jawaban, kunci_jawaban }) {
  return (
    <TouchableOpacity>
      <View style={{ marginBottom: 10 }}>
        <View style={styles.textContainer}>
          <Text style={styles.baseText}>{soal}</Text>
        </View>
        <View
          style={{
            justifyContent: "flex-start",
            alignContent: "center",
            paddingStart: 20,
          }}
        >
          <Text style={{ color: "red" }}>
            Jawaban kamu: <Text>{jawaban}</Text>
          </Text>
          <Text style={{ color: "gray" }}>
            Kunci jawaban: <Text>{kunci_jawaban}</Text>
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    paddingVertical: 10,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  baseText: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#37474F",
  },
  container: {
    backgroundColor: "#DEE4E7",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
});
