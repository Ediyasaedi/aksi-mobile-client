import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Avatar, Accessory, Card } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import { Skor } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { getNilai } from "../store/action";

export default function ResultPage() {
  const nilai = useSelector((state) => state.users.nilaiArray);
  const dispatch = useDispatch();

  useEffect(() => {
    //harus ngambil id dari berhasil login
    dispatch(getNilai(14));
  }, []);

  return (
    <ScrollView>
      <View style={styles.textContainer}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
          }}
        >
          <Avatar
            size="xlarge"
            rounded
            source={{
              uri: "https://www.fillmurray.com/640/360",
            }}
          >
            <Accessory />
          </Avatar>
          <Text style={styles.baseText}>Edi Yasa</Text>
          <Text style={styles.baseText}>SMAN 1 Kota Palangkaraya</Text>
        </View>
        {nilai.length > 0 ? (
          <Card>
            <Text style={styles.baseText}>Riwayat Skor:</Text>
            <View style={styles.toQuestions}>
              {nilai.map((value) => {
                return (
                  <Skor
                    title={value.Wacana.title}
                    skor={value.Nilai}
                    date={value.createdAt}
                    key={value.id}
                  />
                );
              })}
            </View>
          </Card>
        ) : (
          <Card>
            <Text style={styles.baseText}>
              Kamu belum memiliki daftar nilai.
            </Text>
            <Text style={styles.baseText}>
              Silahkan pilih wacana yang ingin kamu baca dan jawab semua
              pertanyaan yang diberikan.
            </Text>
          </Card>
        )}
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
    justifyContent: "center",
    alignItems: "flex-start",
    paddingVertical: 5,
    paddingHorizontal: 10,
    margin: 5,
    borderRadius: 10,
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
