import React, { useEffect } from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { ArticleContent, SwitcherQnA } from "../components";
import { getArticles } from "../store/action";

export default function ArticlePage({ route, navigation }) {
  const { itemId, title } = route.params;
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles.articleList);

  useEffect(() => {
    dispatch(getArticles(itemId));
  }, []);

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
          <SwitcherQnA
            text="Tampilkan Pertanyaan"
            itemId={itemId}
            identy="toQuestions"
            navigation={navigation}
            title={title}
          />
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
  },
});
