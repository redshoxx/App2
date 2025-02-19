import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const LibraryScreen = () => {
  const playlists = [
    { id: '1', name: 'Lieblingssongs', tracks: 123 },
    { id: '2', name: 'Meine Playlist #1', tracks: 45 },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={playlists}
        renderItem={({ item }) => (
          <View style={styles.playlistItem}>
            <Text style={styles.playlistName}>{item.name}</Text>
            <Text style={styles.playlistTracks}>{item.tracks} Titel</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  playlistItem: {
    padding: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: '#282828',
  },
  playlistName: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  playlistTracks: {
    color: '#8E8E8E',
    fontSize: 14,
    marginTop: 4,
  },
});

export default LibraryScreen; 