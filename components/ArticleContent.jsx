import React from "react";
import { StyleSheet, Image, Text, View } from "react-native";

export default function ArticleContent({ title, img_url, content }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
      }}
    >
      <Text style={styles.baseText}>{title}</Text>
      <Image
        source={{ uri: img_url }}
        style={{ width: 300, height: 300, padding: 10, margin: 10 }}
      />
      <Text style={{ textAlign: "justify" }}>{content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  baseText: {
    fontWeight: "bold",
    fontSize: 20,
    justifyContent: "center",
    textAlign: "center",
  },
});
