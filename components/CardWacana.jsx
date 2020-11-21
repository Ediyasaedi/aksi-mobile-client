import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function CardWacana({ navigation, title, img_url, id }) {
  function onItemClick() {
    console.log(id);
    navigation.navigate("ArticlePage", {
      itemId: id,
      title,
    });
  }

  return (
    <TouchableOpacity onPress={onItemClick}>
      <View style={styles.container}>
        <Image
          source={{
            uri: img_url,
          }}
          style={{
            width: 300,
            height: 150,
            borderRadius: 10,
          }}
        />
        <View style={styles.textContainer}>
          <Text style={styles.baseText}>{title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  baseText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#37474F",
  },
  container: {
    backgroundColor: "#DEE4E7",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
});
