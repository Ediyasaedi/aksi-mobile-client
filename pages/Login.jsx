import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.labelText}>Enter Your Email Here:</Text>
      <TextInput style={styles.inputText} />
      <Text>Enter Your Password Here:</Text>
      <TextInput style={styles.inputText} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        <Text>Login</Text>
      </TouchableOpacity>
      <Text>Belum punya akun?</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <Text>Klik Disini</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#f9ed69",
    padding: 10,
    margin: 10,
    borderRadius: 5,
    width: 100,
  },
  labelText: {
    textAlign: "left",
  },
  inputText: {
    alignItems: "center",
    borderColor: "#f08a5d",
    borderWidth: 2,
    padding: 5,
    margin: 10,
    borderRadius: 5,
    width: 250,
  },
});
