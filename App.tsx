import React, { useState } from 'react';
import { View, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import LibraryScreen from './screens/LibraryScreen';
import { Ionicons } from '@expo/vector-icons';
import MiniPlayer from './components/MiniPlayer';
import MusicPlayer from './components/MusicPlayer';

const Tab = createBottomTabNavigator();

const App = () => {
  const [showFullPlayer, setShowFullPlayer] = useState(false);

  return (
    <NavigationContainer>
      <View style={{ flex: 1, maxWidth: Platform.OS === 'web' ? 800 : '100%', margin: 'auto' }}>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Start') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'Suche') {
                iconName = focused ? 'search' : 'search-outline';
              } else if (route.name === 'Bibliothek') {
                iconName = focused ? 'library' : 'library-outline';
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#1DB954', // Spotify-Grün
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: {
              backgroundColor: '#282828',
              display: showFullPlayer ? 'none' : 'flex',
              ...(Platform.OS === 'web' && {
                position: 'relative',
                bottom: 0,
              }),
            },
          })}
        >
          <Tab.Screen 
            name="Start" 
            component={HomeScreen}
            options={{
              headerStyle: {
                backgroundColor: '#121212',
              },
              headerTintColor: '#fff',
            }}
          />
          <Tab.Screen 
            name="Suche" 
            component={SearchScreen}
            options={{
              headerStyle: {
                backgroundColor: '#121212',
              },
              headerTintColor: '#fff',
            }}
          />
          <Tab.Screen 
            name="Bibliothek" 
            component={LibraryScreen}
            options={{
              headerStyle: {
                backgroundColor: '#121212',
              },
              headerTintColor: '#fff',
            }}
          />
        </Tab.Navigator>
        
        {showFullPlayer ? (
          <MusicPlayer onClose={() => setShowFullPlayer(false)} />
        ) : (
          <MiniPlayer onPress={() => setShowFullPlayer(true)} />
        )}
      </View>
    </NavigationContainer>
  );
};

export default App; 