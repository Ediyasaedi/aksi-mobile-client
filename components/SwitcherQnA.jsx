import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

export default function SwitcherQnA({ text, itemId, identy, navigation }) {
  function changeScreen() {
    if (identy === "toQuestions") {
      navigation.navigate("QuestionsPage");
    }
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={changeScreen}>
        <Text>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  button: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
});
