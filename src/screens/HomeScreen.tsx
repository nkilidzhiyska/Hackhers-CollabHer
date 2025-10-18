import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, TextInput, Button } from "react-native";
import colors from "../constants/colors";
import PostCard from "../components/PostCard";

export default function HomeScreen() {
  const [posts, setPosts] = useState([]);
  const [draft, setDraft] = useState("");

  useEffect(() => {
    import("../../assets/data/posts.json").then((m) => setPosts(m.default));
  }, []);

  const createPost = () => {
    if (!draft.trim()) return;
    const newPost = {
      id: Math.random().toString(36).slice(2),
      author_id: "me",
      content: draft,
      created_at: new Date().toISOString(),
    };
    setPosts([newPost, ...posts]);
    setDraft("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home · Feed</Text>
      <View style={styles.composer}>
        <TextInput
          style={styles.input}
          placeholder="Share what you're looking for..."
          placeholderTextColor={colors.subtext}
          value={draft}
          onChangeText={setDraft}
        />
        <Button title="Post" onPress={createPost} />
      </View>
      <FlatList data={posts} keyExtractor={(p) => p.id} renderItem={({ item }) => <PostCard post={item} />} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bg, padding: 16 },
  title: { color: colors.text, fontSize: 22, fontWeight: "700" },
  composer: { backgroundColor: colors.card, padding: 10, borderRadius: 12, marginVertical: 12 },
  input: { color: colors.text, marginBottom: 8 },
});
