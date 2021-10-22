import React, { useState } from 'react';

import { StyleSheet, View } from 'react-native';

import HeaderSecond from './components/HeaderSecond';
import StartScreen from './screens/StartScreen';
import LoginScreen from './screens/LoginScreen';

import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import HomeScreen from './screens/HomeScreen';

const fetchFont = async () => {
  await Font.loadAsync({
    'dm-mono': require('./assets/fonts/DMMono-Regular.ttf'),
    'dm-mono-medium': require('./assets/fonts/DMMono-Medium.ttf'),
  });
};

// import {
//   useFonts,
//   DMMono_300Light,
//   DMMono_300Light_Italic,
//   DMMono_400Regular,
//   DMMono_400Regular_Italic,
//   DMMono_500Medium,
//   DMMono_500Medium_Italic,
// } from '@expo-google-fonts/dm-mono';

export default function App() {
  // let [fontsLoaded] = useFonts({
  //   DMMono_300Light,
  //   DMMono_300Light_Italic,
  //   DMMono_400Regular,
  //   DMMono_400Regular_Italic,
  //   DMMono_500Medium,
  //   DMMono_500Medium_Italic,
  // });

  const [dataIsLoaded, setDataIsLoaded] = useState(false);
  const [showLoginScreen, setShowLoginScreen] = useState(false);
  const [showHomeScreen, setShowHomeScreen] = useState(false);

  const loginScreen = () => {
    setShowLoginScreen(true);
    console.log('hello from other side');
  };

  const homeScreen = () => {
    setShowHomeScreen(true);
    console.log('Hello from another side!');
  };

  if (!dataIsLoaded) {
    return (
      <AppLoading
        startAsync={fetchFont}
        onFinish={() => setDataIsLoaded(true)}
        onError={err => console.log(err)}
      />
    );
  }

  return (
    <View style={styles.screen}>
      <HeaderSecond />
      {!showLoginScreen ? (
        <StartScreen onLogin={loginScreen} />
      ) : !showHomeScreen ? (
        <LoginScreen />
      ) : (
        <HomeScreen onSignIn={homeScreen} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // backgroundColor: '#F0E8EA',
  },
});
