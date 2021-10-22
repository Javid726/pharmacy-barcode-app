import React from 'react';
import { View, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.headerContainer}>
        <View style={styles.circle1}></View>
        <View style={styles.circle2}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
  },
  headerContainer: {
    position: 'relative',
  },
  circle1: {
    width: 175,
    height: 175,
    borderRadius: 87,
    backgroundColor: 'red',
    opacity: 0.6,
    position: 'absolute',
    top: -15,
    left: -95,
  },
  circle2: {
    width: 170,
    height: 170,
    borderRadius: 85,
    backgroundColor: 'red',
    opacity: 0.6,
    position: 'absolute',
    top: -90,
    left: -10,
  },
});

export default Header;
