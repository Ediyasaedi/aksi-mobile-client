import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import logo from "../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../store/action/index";

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

export default function Register({ navigation: { goBack, navigate } }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [img_url, setImgUrl] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.user);

  function emailOnChange(text) {
    setEmail(text);
  }

  function nameOnChange(text) {
    setName(text);
  }

  function imgUrlOnChange(text) {
    setImgUrl(text);
  }

  function passwordOnChange(text) {
    setPassword(text);
  }

  function handleOnSubmit() {
    let payload = { email, name, img_url, password, role: "siswa" };
    dispatch(registerUser(payload));
    if (user.hasOwnProperty("id")) {
      navigate("Login");
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.greetingImg}>
        <Image
          source={logo}
          style={{ width: screenWidth / 2, height: screenHeight / 6 }}
        />
      </View>
      <View>
        <Text style={styles.labelText}>Masukan Email:</Text>
        <TextInput
          style={styles.inputText}
          value={email}
          onChangeText={emailOnChange}
        />
        <Text style={styles.labelText}>Masukan Nama:</Text>
        <TextInput
          style={styles.inputText}
          value={name}
          onChangeText={nameOnChange}
        />
        <Text style={styles.labelText}>Masukan Image Url:</Text>
        <TextInput
          style={styles.inputText}
          value={img_url}
          onChangeText={imgUrlOnChange}
        />
        <Text style={styles.labelText}>Masukan Password:</Text>
        <TextInput
          style={styles.inputText}
          secureTextEntry={true}
          value={password}
          onChangeText={passwordOnChange}
        />
        <TouchableOpacity style={styles.button} onPress={handleOnSubmit}>
          <Text style={{ color: "#4e7474" }}>Daftar</Text>
        </TouchableOpacity>
        <View style={styles.gotoRegister}>
          <Text style={styles.labelText}>Sudah punya akun? </Text>
          <TouchableOpacity onPress={() => goBack()}>
            <Text style={{ color: "#4e7474", textDecorationLine: "underline" }}>
              Masuk
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
  },
  gotoRegister: {
    flexDirection: "row",
    justifyContent: "center",
  },
  greetingImg: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    opacity: 0.8,
  },
});
