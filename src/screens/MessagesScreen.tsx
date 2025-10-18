import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import colors from "../constants/colors";

const conversations = [
  { id: "1", peer: "Maya", lastMessage: "Let's barter React ↔ SQL", time: "2025-10-16T19:30:00Z" },
  { id: "2", peer: "Alina", lastMessage: "Wanna meet at the GSU Library?", time: "2025-10-15T17:05:00Z" },
];

export default function MessagesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Messages</Text>
      <FlatList
        data={conversations}
        keyExtractor={(c) => c.id}
        renderItem={({ item }) => (
          <View style={styles.chatRow}>
            <Text style={styles.peer}>{item.peer}</Text>
            <Text style={styles.msg}>{item.lastMessage}</Text>
            <Text style={styles.time}>{new Date(item.time).toLocaleString()}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bg, padding: 16 },
  title: { color: colors.text, fontSize: 22, fontWeight: "700" },
  chatRow: { backgroundColor: colors.card, padding: 12, borderRadius: 12, marginVertical: 8 },
  peer: { color: colors.accent, fontWeight: "700" },
  msg: { color: colors.text, marginTop: 4 },
  time: { color: colors.subtext, marginTop: 4, fontSize: 12 },
});
