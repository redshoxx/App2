import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const MiniPlayer = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image 
        source={{ uri: 'https://via.placeholder.com/50' }} 
        style={styles.artwork} 
      />
      <View style={styles.songInfo}>
        <Text style={styles.title}>Beispiel Song</Text>
        <Text style={styles.artist}>Beispiel Künstler</Text>
      </View>
      <TouchableOpacity style={styles.playButton}>
        <Ionicons name="play" size={24} color="#FFFFFF" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: '#282828',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderTopWidth: 1,
    borderTopColor: '#1DB954',
  },
  artwork: {
    width: 44,
    height: 44,
    borderRadius: 4,
  },
  songInfo: {
    flex: 1,
    marginLeft: 12,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  artist: {
    color: '#B3B3B3',
    fontSize: 12,
  },
  playButton: {
    padding: 8,
  },
});

export default MiniPlayer; 