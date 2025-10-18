import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, FlatList } from "react-native";
import colors from "../constants/colors";
import ProfileCard from "../components/ProfileCard";
import EventCard from "../components/EventCard";

export default function SearchScreen() {
  const [q, setQ] = useState("");
  const [profiles, setProfiles] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    import("../../assets/data/profiles.json").then((m) => setProfiles(m.default));
    import("../../assets/data/events.json").then((m) => setEvents(m.default));
  }, []);

  const filteredProfiles = profiles.filter((p) =>
    [p.name, ...p.skills, ...p.lookingToLearn]
      .join(" ")
      .toLowerCase()
      .includes(q.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search · Explore</Text>
      <TextInput
        style={styles.input}
        placeholder="Search skills, interests..."
        placeholderTextColor={colors.subtext}
        value={q}
        onChangeText={setQ}
      />
      <Text style={styles.section}>Suggested Profiles</Text>
      <FlatList data={filteredProfiles} keyExtractor={(p) => p.id} renderItem={({ item }) => <ProfileCard profile={item} />} />
      <Text style={styles.section}>Public Events</Text>
      <FlatList data={events} keyExtractor={(e) => e.id} renderItem={({ item }) => <EventCard event={item} />} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bg, padding: 16 },
  title: { color: colors.text, fontSize: 22, fontWeight: "700" },
  input: { backgroundColor: colors.card, color: colors.text, padding: 10, borderRadius: 10, marginVertical: 12 },
  section: { color: colors.accent, fontWeight: "600", marginTop: 12 },
});
