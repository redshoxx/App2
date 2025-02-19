import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions, Platform } from 'react-native';
import { Audio } from 'expo-av';
import Slider from '@react-native-community/slider';
import { Ionicons } from '@expo/vector-icons';

const MusicPlayer = ({ onClose }) => {
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);

  const currentSong = {
    title: 'Beispiel Song',
    artist: 'Beispiel Künstler',
    artwork: 'https://via.placeholder.com/400',
    audioUrl: 'IHRE_AUDIO_URL_HIER'
  };

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const loadAudio = async () => {
    if (Platform.OS === 'web') {
      // Web-Audio-Implementation
      const audio = new Audio(currentSong.audioUrl);
      // Implementieren Sie hier die Web-Audio-Logik
    } else {
      // Bestehende React Native Audio-Implementation
      try {
        const { sound: newSound } = await Audio.Sound.createAsync(
          { uri: currentSong.audioUrl },
          { shouldPlay: false }
        );
        setSound(newSound);
        
        const status = await newSound.getStatusAsync();
        setDuration(status.durationMillis || 0);
      } catch (error) {
        console.error('Fehler beim Laden des Audios:', error);
      }
    }
  };

  const handlePlayPause = async () => {
    if (!sound) {
      await loadAudio();
    }
    
    if (isPlaying) {
      await sound?.pauseAsync();
    } else {
      await sound?.playAsync();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: currentSong.artwork }} style={styles.artwork} />
      
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{currentSong.title}</Text>
        <Text style={styles.artist}>{currentSong.artist}</Text>
      </View>

      <View style={styles.controls}>
        <TouchableOpacity>
          <Ionicons name="play-skip-back" size={32} color="#FFFFFF" />
        </TouchableOpacity>
        
        <TouchableOpacity onPress={handlePlayPause} style={styles.playButton}>
          <Ionicons 
            name={isPlaying ? "pause" : "play"} 
            size={40} 
            color="#FFFFFF" 
          />
        </TouchableOpacity>
        
        <TouchableOpacity>
          <Ionicons name="play-skip-forward" size={32} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      <View style={styles.sliderContainer}>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={duration}
          value={position}
          minimumTrackTintColor="#1DB954"
          maximumTrackTintColor="#FFFFFF"
          thumbTintColor="#1DB954"
          onSlidingComplete={async (value) => {
            if (sound) {
              await sound.setPositionAsync(value);
              setPosition(value);
            }
          }}
        />
        <View style={styles.timeContainer}>
          <Text style={styles.time}>{formatTime(position)}</Text>
          <Text style={styles.time}>{formatTime(duration)}</Text>
        </View>
      </View>
    </View>
  );
};

const formatTime = (milliseconds: number) => {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#282828',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#1DB954',
  },
  artwork: {
    width: Dimensions.get('window').width - 40,
    height: Dimensions.get('window').width - 40,
    borderRadius: 8,
    marginBottom: 20,
  },
  infoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  artist: {
    color: '#B3B3B3',
    fontSize: 18,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 40,
  },
  playButton: {
    backgroundColor: '#1DB954',
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sliderContainer: {
    width: '100%',
  },
  slider: {
    width: '100%',
    height: 40,
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  time: {
    color: '#B3B3B3',
    fontSize: 12,
  },
});

export default MusicPlayer; 