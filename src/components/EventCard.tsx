import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../constants/colors";

export default function EventCard({ event }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{event.title}</Text>
      <Text style={styles.meta}>{new Date(event.date).toDateString()} • {event.location}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: colors.card, padding: 12, borderRadius: 12, marginVertical: 8 },
  title: { color: colors.text, fontSize: 16, fontWeight: "600" },
  meta: { color: colors.subtext, marginTop: 4 },
});
