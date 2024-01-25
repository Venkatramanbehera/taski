import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Logo} from '../images';

const Welcome = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={Logo} style={styles.logoStyle} />
        <Text style={styles.welcomeText}>Welcome</Text>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#63BDEF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logoStyle: {
    height: 150,
    width: 150,
    resizeMode: 'contain',
  },
  welcomeText: {
    fontFamily: '',
    fontWeight: 'bold',
    fontSize: 35,
  },
});
