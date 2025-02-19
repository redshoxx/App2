import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const RecentlyPlayed = () => {
  const recentItems = [
    { id: '1', title: 'Daily Mix 1', image: 'https://via.placeholder.com/150' },
    { id: '2', title: 'Lieblingssongs', image: 'https://via.placeholder.com/150' },
    // Weitere Items hier...
  ];

  return (
    <ScrollView horizontal style={styles.container} showsHorizontalScrollIndicator={false}>
      {recentItems.map(item => (
        <TouchableOpacity key={item.id} style={styles.item}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
  },
  item: {
    width: 140,
    marginRight: 16,
  },
  image: {
    width: 140,
    height: 140,
    borderRadius: 4,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 14,
    marginTop: 8,
  },
});

export default RecentlyPlayed; 