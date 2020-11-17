import React from "react";
import { ScrollView, View, Text } from "react-native";
import { ArticleContent, SwitcherQnA } from "../components";

export default function ArticlePage() {
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
        </View>
        <ArticleContent />
        <SwitcherQnA text="Tampilkan Pertanyaan" />
      </View>
    </ScrollView>
  );
}
