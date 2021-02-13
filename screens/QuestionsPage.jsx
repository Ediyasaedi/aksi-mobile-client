import React, { useEffect, useState } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Question } from "../components";
import { getQuestions, setAnswers } from "../store/action";

export default function QuestionsPage({ route, navigation }) {
  const { itemId, title } = route.params;
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questions.questionList);
  const answers = [];
  let skor = 0;

  useEffect(() => {
    dispatch(getQuestions(itemId));
  }, []);

  function getValue(v, obj) {
    answers.push(obj);
    skor += v;
  }

  function submitTest() {
    dispatch(setAnswers(answers));
    let result = Math.round((skor / questions.length) * 100);
    navigation.navigate("ResultPage", {
      title,
      skor: result,
      itemId,
    });
  }

  return (
    <ScrollView>
      <View style={styles.textContainer}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
          }}
        >
          <Text style={styles.baseText}>
            Sekarang kamu membaca wacana:{" "}
            <Text style={styles.innerText}>{title}</Text>
          </Text>
          <Text style={styles.baseText}>Selamat Mengerjakan</Text>
        </View>
        <View>
          {questions.map((question) => {
            return (
              <Question
                key={question.id}
                question={question}
                getValue={(v, obj) => getValue(v, obj)}
              />
            );
          })}
        </View>
        <View style={styles.toQuestions}>
          <TouchableOpacity onPress={submitTest}>
            <Text style={{ color: "white" }}>Selesai</Text>
          </TouchableOpacity>
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
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 30,
    backgroundColor: "red",
    margin: 10,
    borderRadius: 10,
  },
});
