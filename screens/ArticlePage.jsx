import React, { useEffect } from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { ArticleContent } from "../components";
import { getArticles } from "../store/action";

export default function ArticlePage({ route, navigation }) {
  const { itemId, title } = route.params;
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles.articleList);

  useEffect(() => {
    dispatch(getArticles(itemId));
  }, []);

  function showQuestions() {
    navigation.navigate("QuestionsPage", {
      itemId,
      title,
    });
  }

  return (
    <ScrollView>
      <View style={styles.articleContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.baseText}>
            Sekarang kamu membaca wacana:{" "}
            <Text style={styles.innerText}>{title}</Text>
          </Text>
        </View>
        {articles.map((article) => {
          return (
            <ArticleContent
              key={article.id}
              title={article.title}
              img_url={article.img_url}
              content={article.content}
            />
          );
        })}
        <View style={styles.toQuestions}>
          <TouchableOpacity onPress={showQuestions}>
            <Text style={{ color: "white" }}>Tampilkan Pertanyaan</Text>
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
    padding: 15,
    backgroundColor: "red",
    margin: 10,
    borderRadius: 10,
  },
});
