import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import colors from "../constants/colors";
import ProfileCard from "../components/ProfileCard";
import PostCard from "../components/PostCard";

export default function ProfileScreen() {
  const [me, setMe] = useState(null);
  const [myPosts, setMyPosts] = useState([]);

  useEffect(() => {
    import("../../assets/data/profiles.json").then((m) => setMe(m.default[0]));
    import("../../assets/data/posts.json").then((m) => {
      setMyPosts(m.default.filter((p) => p.author_id === "nina"));
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Profile</Text>
      {me && <ProfileCard profile={me} />}
      <Text style={styles.section}>My Posts</Text>
      <FlatList data={myPosts} keyExtractor={(p) => p.id} renderItem={({ item }) => <PostCard post={item} />} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bg, padding: 16 },
  title: { color: colors.text, fontSize: 22, fontWeight: "700" },
  section: { color: colors.accent, fontWeight: "700", marginTop: 12 },
});
