import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const genres = [
    { id: 1, name: 'Pop', color: '#FF4081', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Rock', color: '#8E24AA', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Hip-Hop', color: '#3F51B5', image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Dance/Electronic', color: '#00BCD4', image: 'https://via.placeholder.com/150' },
    // Weitere Genres...
  ];

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Ionicons name="search" size={24} color="#000000" />
        <TextInput
          style={styles.searchInput}
          placeholder="Was möchtest du hören?"
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholderTextColor="#000000"
        />
      </View>

      <Text style={styles.sectionTitle}>Durchstöbern</Text>
      
      <ScrollView style={styles.genreGrid}>
        <View style={styles.row}>
          {genres.map((genre) => (
            <TouchableOpacity 
              key={genre.id} 
              style={[styles.genreCard, { backgroundColor: genre.color }]}
            >
              <Text style={styles.genreTitle}>{genre.name}</Text>
              <Image 
                source={{ uri: genre.image }} 
                style={styles.genreImage} 
              />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 16,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    padding: 12,
    marginBottom: 24,
  },
  searchInput: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
  },
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  genreGrid: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  genreCard: {
    width: 'calc(50% - 8px)',
    height: 200,
    borderRadius: 8,
    padding: 16,
    position: 'relative',
    overflow: 'hidden',
  },
  genreTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    zIndex: 1,
  },
  genreImage: {
    position: 'absolute',
    bottom: -10,
    right: -10,
    width: 100,
    height: 100,
    transform: [{ rotate: '25deg' }],
  },
};

export default SearchPage; 