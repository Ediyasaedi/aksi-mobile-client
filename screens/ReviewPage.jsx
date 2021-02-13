import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { ReviewDetail } from "../components/index";
import { useSelector } from "react-redux";

export default function ReviewPage({ navigation: { navigate }, route }) {
  const { title } = route.params;
  const answers = useSelector((state) => state.questions.answers);
  return (
    <ScrollView>
      <View
        style={{
          justifyContent: "center",
          padding: 10,
        }}
      >
        <Text style={styles.baseText}>
          Review wacana: <Text style={styles.innerText}>{title}</Text>
        </Text>
      </View>
      <View style={styles.toQuestions}>
        {answers.map((asw) => (
          <ReviewDetail
            key={asw.id}
            soal={asw.soal}
            jawaban={asw.jawaban}
            kunci_jawaban={asw.kunci}
          />
        ))}
      </View>
      <View style={{ justifyContent: "center", alignContent: "center" }}>
        <TouchableOpacity
          style={styles.btnStyles}
          onPress={() => navigate("Home")}
        >
          <Text style={{ color: "white" }}>Kembali Ke Halaman Utama</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingVertical: 10,
    paddingHorizontal: 30,
    margin: 10,
    borderRadius: 10,
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
