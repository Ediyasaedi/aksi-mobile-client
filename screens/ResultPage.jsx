import React from "react";
import { View, Text, Button } from "react-native";
import { SwitcherQnA } from "../components";

export default function ResultPage() {
  return (
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
        <Text style={{ textAlign: "center" }}>
          Selamat, Kamu telah membaca dan menjawab Wacana: Robotik
        </Text>
        <Text>Skor:</Text>
        <Text>9/10</Text>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Button title="Coba Lagi" />
          <Button title="Simpan" />
        </View>
      </View>
    </View>
  );
}
