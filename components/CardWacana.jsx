import React from "react";
import { Text, View, Image } from "react-native";

export default function CardWacana() {
  return (
    <View
      style={{
        backgroundColor: "powderblue",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10,
        padding: 10,
      }}
    >
      <Image
        source={{ uri: "https://reactjs.org/logo-og.png" }}
        style={{ width: 300, height: 100 }}
      />
      <Text>Judul Wacana</Text>
    </View>
  );
}
