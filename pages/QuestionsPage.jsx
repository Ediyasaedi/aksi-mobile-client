import React from "react";
import { ScrollView, View, Text } from "react-native";
import { Question, SwitcherQnA } from "../components";

export default function QuestionsPage() {
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: 10,
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
          }}
        >
          <Text>Sekarang kamu membaca Wacana: Robotik</Text>
          <Text>Selamat Mengerjakan</Text>
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
