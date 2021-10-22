import React, { useState } from 'react';

import { View, Text, Image, StyleSheet } from 'react-native';
import SvgUri from 'react-native-svg-uri';
import MainButton from '../components/MainButton';
import LoginScreen from './LoginScreen';

const StartScreen = props => {
  return (
    <View style={styles.screen}>
      <Image
        source={require('../assets/mainImage.png')}
        style={styles.image}
        resizeMode="cover"
      />
      {/* <SvgUri
            source={require('../assets/svgMedicine.svg')}
            style={styles.image}
            width="275"
            height="170"
          /> */}
      <Text style={styles.welcomeHeader}>Welcome On Board</Text>
      <Text style={styles.welcomeMessage}>
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour
      </Text>
      <MainButton onPress={props.onLogin}>Get Started</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 275,
    height: 170,
  },
  welcomeHeader: {
    textAlign: 'center',
    fontWeight: '800',
    fontSize: 24,
    lineHeight: 31,
    color: 'rgba(0, 0, 0, 0.53)',
    marginTop: 20,
    fontFamily: 'dm-mono-medium',
  },
  welcomeMessage: {
    textAlign: 'center',
    fontWeight: '400',
    width: 300,
    fontSize: 13,
    lineHeight: 19,
    color: 'rgba(0, 0, 0, 0.71)',
    marginTop: 15,
    fontFamily: 'dm-mono',
  },
});

export default StartScreen;
