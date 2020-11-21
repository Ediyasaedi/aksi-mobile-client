import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { Question, SwitcherQnA } from "../components";

export default function QuestionsPage({ title }) {
  return (
    <ScrollView>
      <View style={styles.textContainer}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
          }}
        >
          <Text style={styles.baseText}>
            Sekarang kamu membaca wacana:{" "}
            <Text style={styles.innerText}>Hoaks</Text>
          </Text>
          <Text style={styles.baseText}>Selamat Mengerjakan</Text>
        </View>
        <View>
          <Question />
          <Question />
          <Question />
          <Question />
          <Question />
        </View>
        <SwitcherQnA text="Tampilkan Artikel" />
      </View>
    </ScrollView>
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
  },
});
