import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../constants/colors";

export default function PostCard({ post }) {
  return (
    <View style={styles.card}>
      <Text style={styles.author}>@{post.author_id}</Text>
      <Text style={styles.content}>{post.content}</Text>
      <Text style={styles.time}>{new Date(post.created_at).toLocaleString()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: colors.card, padding: 12, borderRadius: 12, marginVertical: 8 },
  author: { color: colors.accent, fontWeight: "600" },
  content: { color: colors.text, fontSize: 16, marginTop: 4 },
  time: { color: colors.subtext, marginTop: 4, fontSize: 12 },
});
