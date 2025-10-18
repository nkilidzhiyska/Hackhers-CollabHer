import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../constants/colors";

export default function ProfileCard({ profile }) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{profile.name}{profile.age ? `, ${profile.age}` : ""}</Text>
      <Text style={styles.industry}>{profile.industry}</Text>
      <Text style={styles.line}>Skills: {profile.skills.join(", ")}</Text>
      <Text style={styles.line}>Wants: {profile.lookingToLearn.join(", ")}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: colors.card, padding: 12, borderRadius: 12, marginVertical: 8 },
  name: { color: colors.text, fontSize: 18, fontWeight: "700" },
  industry: { color: colors.accent },
  line: { color: colors.subtext, marginTop: 4 },
});
