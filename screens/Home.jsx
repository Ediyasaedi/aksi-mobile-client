import React, { useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { CardWacana } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { getWacanas } from "../store/action";

export default function Home({ navigation }) {
  const wacanas = useSelector((state) => state.wacanas.wacanaList);
  const dispatch = useDispatch();
  console.log(wacanas, "home");

  useEffect(() => {
    dispatch(getWacanas());
  }, []);

  return (
    <>
      <ScrollView style={{ flex: 1, flexDirection: "column" }}>
        <View>
          <View style={styles.textContainer}>
            <Text style={styles.baseText}>
              Hallo, <Text style={styles.innerText}>Edi Yasa,</Text>
            </Text>
            <Text style={styles.subText}>
              Silahkan memilih wacana yang akan kamu kerjakan:
            </Text>
          </View>
          <View style={styles.wacanaContainer}>
            {wacanas.map((wacana) => {
              return (
                <CardWacana
                  title={wacana.title}
                  img_url={wacana.img_url}
                  key={wacana.id}
                  id={wacana.id}
                  navigation={navigation}
                />
              );
            })}
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  baseText: {
    fontWeight: "bold",
    fontSize: 30,
  },
  innerText: {
    color: "red",
  },
  subText: {
    fontSize: 20,
    fontStyle: "italic",
  },
  wacanaContainer: {
    flex: 5,
    justifyContent: "center",
    alignContent: "center",
    paddingHorizontal: 20,
  },
});
