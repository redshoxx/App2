import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

const LoginPage = () => {
  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: 'https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png' }} 
        style={styles.logo} 
      />
      
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>Mit Spotify einloggen</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.loginButtonGoogle}>
        <Image 
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg' }} 
          style={styles.googleIcon} 
        />
        <Text style={styles.loginTextGoogle}>Mit Google fortfahren</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.loginButtonFacebook}>
        <Image 
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png' }} 
          style={styles.facebookIcon} 
        />
        <Text style={styles.loginTextFacebook}>Mit Facebook fortfahren</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 200,
    height: 60,
    resizeMode: 'contain',
    marginBottom: 40,
  },
  loginButton: {
    backgroundColor: '#1DB954',
    width: '100%',
    maxWidth: 450,
    padding: 16,
    borderRadius: 25,
    marginBottom: 16,
  },
  loginText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginButtonGoogle: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    maxWidth: 450,
    padding: 16,
    borderRadius: 25,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  googleIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  loginTextGoogle: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginButtonFacebook: {
    backgroundColor: '#1877F2',
    width: '100%',
    maxWidth: 450,
    padding: 16,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  facebookIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  loginTextFacebook: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
};

export default LoginPage; 