import React from "react";
import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { CardWacana } from "../components";

export default function Home() {
  return (
    <>
      <ScrollView style={{ flex: 1, flexDirection: "column" }}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
          }}
        >
          <Text>Hallo Edi Yasa,</Text>
          <Text>Silahkan memilih wacana yang akan kamu kerjakan:</Text>
        </View>
        <View
          style={{
            flex: 5,
            justifyContent: "center",
            alignContent: "center",
            padding: 10,
          }}
        >
          <CardWacana />
          <CardWacana />
          <CardWacana />
          <CardWacana />
          <CardWacana />
          <CardWacana />
          <CardWacana />
        </View>
      </ScrollView>
    </>
  );
}
