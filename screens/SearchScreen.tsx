import React from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.searchInput}
        placeholder="Künstler, Songs oder Podcasts"
        placeholderTextColor="#8E8E8E"
      />
      <ScrollView>
        <Text style={styles.sectionTitle}>Deine Top-Genres</Text>
        {/* Hier kommen die Genre-Karten */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 16,
  },
  searchInput: {
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 4,
    fontSize: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default SearchScreen; 