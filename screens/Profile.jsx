import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Avatar, Accessory, Badge } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import { Skor } from "../components";

export default function ResultPage() {
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
        <View style={styles.toQuestions}>
          <Skor title="Hoaks" skor="100" />
          <Skor title="Nontunai" skor="80" />
          <Skor title="Glokalisasi" skor="90" />
          <Skor title="Robotik" skor="80" />
          <Skor title="Hoaks" skor="100" />
          <Skor title="Nontunai" skor="80" />
          <Skor title="Glokalisasi" skor="90" />
          <Skor title="Robotik" skor="80" />
          <Skor title="Hoaks" skor="100" />
          <Skor title="Nontunai" skor="80" />
          <Skor title="Glokalisasi" skor="90" />
          <Skor title="Robotik" skor="80" />
          <Skor title="Hoaks" skor="100" />
          <Skor title="Nontunai" skor="80" />
          <Skor title="Glokalisasi" skor="90" />
          <Skor title="Robotik" skor="80" />
          <Skor title="Hoaks" skor="100" />
          <Skor title="Nontunai" skor="80" />
          <Skor title="Glokalisasi" skor="90" />
          <Skor title="Robotik" skor="80" />
          <Skor title="Hoaks" skor="100" />
          <Skor title="Nontunai" skor="80" />
          <Skor title="Glokalisasi" skor="90" />
          <Skor title="Robotik" skor="80" />
        </View>
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
