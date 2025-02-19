import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const PlaylistPage = () => {
  const playlist = {
    title: 'Meine Playlist #1',
    description: 'Die besten Songs für jeden Moment',
    coverImage: 'https://via.placeholder.com/300',
    totalSongs: 50,
    duration: '2 Std. 35 Min.',
    songs: [
      { id: 1, title: 'Song 1', artist: 'Künstler 1', duration: '3:30' },
      { id: 2, title: 'Song 2', artist: 'Künstler 2', duration: '4:15' },
      // Weitere Songs...
    ],
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: playlist.coverImage }} style={styles.coverImage} />
        <View style={styles.playlistInfo}>
          <Text style={styles.playlistTitle}>{playlist.title}</Text>
          <Text style={styles.playlistDescription}>{playlist.description}</Text>
          <Text style={styles.playlistStats}>
            {playlist.totalSongs} Songs • {playlist.duration}
          </Text>
        </View>
      </View>

      <View style={styles.controls}>
        <TouchableOpacity style={styles.playButton}>
          <Ionicons name="play" size={32} color="#000000" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="heart-outline" size={32} color="#1DB954" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="ellipsis-horizontal" size={32} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      <View style={styles.songList}>
        {playlist.songs.map((song, index) => (
          <TouchableOpacity key={song.id} style={styles.songItem}>
            <Text style={styles.songNumber}>{index + 1}</Text>
            <View style={styles.songInfo}>
              <Text style={styles.songTitle}>{song.title}</Text>
              <Text style={styles.songArtist}>{song.artist}</Text>
            </View>
            <Text style={styles.songDuration}>{song.duration}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  header: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  coverImage: {
    width: 200,
    height: 200,
    marginRight: 16,
  },
  playlistInfo: {
    flex: 1,
  },
  playlistTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  playlistDescription: {
    color: '#B3B3B3',
    fontSize: 14,
    marginBottom: 8,
  },
  playlistStats: {
    color: '#B3B3B3',
    fontSize: 14,
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    gap: 24,
  },
  playButton: {
    backgroundColor: '#1DB954',
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  songList: {
    padding: 16,
  },
  songItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  songNumber: {
    color: '#B3B3B3',
    width: 30,
  },
  songInfo: {
    flex: 1,
    marginLeft: 16,
  },
  songTitle: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  songArtist: {
    color: '#B3B3B3',
    fontSize: 14,
  },
  songDuration: {
    color: '#B3B3B3',
    marginLeft: 16,
  },
};

export default PlaylistPage; 