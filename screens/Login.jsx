import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { loginUser } from "../store/action";
import { useDispatch, useSelector } from "react-redux";
import { AuthContext } from "../Route";

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

export default function Login({ navigation: { navigate } }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = React.useContext(AuthContext);
  const token = useSelector((state) => state.users.token);
  const dispatch = useDispatch();

  function emailOnChange(text) {
    setEmail(text);
  }

  function passwordOnChange(text) {
    setPassword(text);
  }

  function handleOnSubmit() {
    let payload = { email, password };
    signIn(payload);
  }

  return (
    <View style={styles.container}>
      <View style={styles.greetingImg}>
        <Text style={styles.textWelcome}>Halaman Login</Text>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.labelText}>Masukan Email:</Text>
        <TextInput
          style={styles.inputText}
          value={email}
          onChangeText={emailOnChange}
        />
        <Text style={styles.labelText}>Masukan Password:</Text>
        <TextInput
          style={styles.inputText}
          secureTextEntry={true}
          value={password}
          onChangeText={passwordOnChange}
        />
        <TouchableOpacity style={styles.button} onPress={handleOnSubmit}>
          <Text style={{ color: "#4e7474" }}>Masuk</Text>
        </TouchableOpacity>
        <View style={styles.gotoRegister}>
          <Text style={styles.labelText}>Belum punya akun? </Text>
          <TouchableOpacity onPress={() => navigate("Register")}>
            <Text style={{ color: "#4e7474", textDecorationLine: "underline" }}>
              Daftar Disini
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eeeded",
  },
  formContainer: {
    padding: 10,
    flex: 3,
  },
  gotoRegister: {
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#9ad3bc",
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  labelText: {
    textAlign: "left",
    paddingLeft: 10,
    color: "#4e7474",
  },
  inputText: {
    alignItems: "center",
    borderColor: "#f08a5d",
    borderWidth: 2,
    padding: 5,
    margin: 10,
    borderRadius: 5,
    width: 250,
    color: "#4e7474",
  },
  greetingImg: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    opacity: 0.8,
    flex: 1,
  },
  textWelcome: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#4e7474",
  },
});
