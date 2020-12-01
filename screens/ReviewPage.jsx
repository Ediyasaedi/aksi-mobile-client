import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { ReviewDetail } from "../components/index";

export default function ReviewPage({ navigation: { navigate } }) {
  return (
    <ScrollView>
      <View
        style={{
          justifyContent: "center",
          padding: 10,
        }}
      >
        <Text style={styles.baseText}>
          Hasil review wacana: <Text style={styles.innerText}>Hoaks</Text>
        </Text>
      </View>
      <View style={styles.toQuestions}>
        <ReviewDetail
          soal="Apakah ini soal yang pertama?"
          jawaban="Iyaa dong"
          kunci_jawaban="Iyaa"
        />
        <ReviewDetail
          soal="Apakah ini soal yang kedua yang harusnya lebih panjang?"
          jawaban="Iyaa dong"
          kunci_jawaban="Iyaa"
        />
        <ReviewDetail
          soal="Apakah ini soal yang ketiga?"
          jawaban="Kedua"
          kunci_jawaban="Ketiga"
        />
        <ReviewDetail
          soal="Apakah ini soal yang keempat?"
          jawaban="Kedua"
          kunci_jawaban="Ketiga"
        />
        <ReviewDetail
          soal="Apakah ini soal yang kelima?"
          jawaban="Kedua"
          kunci_jawaban="Ketiga"
        />
        <ReviewDetail
          soal="Apakah ini soal yang keenam?"
          jawaban="Jawab siswa yang kedua adalah aku adalah aku"
          kunci_jawaban="Ketiga"
        />
        <ReviewDetail
          soal="Apakah ini soal yang ketujuh?"
          jawaban="Kedua"
          kunci_jawaban="Ketiga"
        />
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
