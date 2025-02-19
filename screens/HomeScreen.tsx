import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import RecentlyPlayed from '../components/RecentlyPlayed';
import FeaturedPlaylists from '../components/FeaturedPlaylists';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.greeting}>Guten Abend</Text>
      <RecentlyPlayed />
      <Text style={styles.sectionTitle}>Für dich gemacht</Text>
      <FeaturedPlaylists />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  greeting: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    padding: 16,
  },
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 16,
  },
});

export default HomeScreen; 