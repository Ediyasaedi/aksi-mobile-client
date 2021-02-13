import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { saveNilai } from "../store/action";

export default function ResultPage({ navigation: { navigate }, route }) {
  const { title, skor, itemId } = route.params;
  const UserId = useSelector((state) => state.users.userLogin.id);
  const dispatch = useDispatch();

  function saveSkor() {
    const payload = {
      WacanaId: itemId,
      UserId,
      NilaiValue: skor,
    };
    dispatch(saveNilai(payload));
    navigate("Profile");
  }

  return (
    <View style={styles.textContainer}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          padding: 10,
        }}
      >
        <Text style={styles.baseText}>
          Kamu telah menyelesaikan wacana:{" "}
          <Text style={styles.innerText}>{title}</Text>
        </Text>
        <Text style={styles.baseText}>
          Skor kamu: <Text style={styles.innerText}>{skor}</Text>
        </Text>
      </View>
      <View style={styles.toQuestions}>
        <TouchableOpacity style={styles.btnStyles} onPress={saveSkor}>
          <Text style={{ color: "white" }}>Simpan</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnStyles}
          onPress={() =>
            navigate("ReviewPage", {
              title,
            })
          }
        >
          <Text style={{ color: "white" }}>Coba Lagi</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  baseText: {
    fontWeight: "bold",
    fontSize: 20,
    justifyContent: "center",
    textAlign: "center",
  },
  innerText: {
    color: "red",
  },
  articleContainer: {
    justifyContent: "center",
    alignContent: "center",
  },
  toQuestions: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 30,
    margin: 10,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btnStyles: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
    margin: 10,
    borderRadius: 10,
    flex: 1,
    backgroundColor: "red",
  },
});
