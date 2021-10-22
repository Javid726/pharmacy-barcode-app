import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Header = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 100,
    paddingTop: 40,
    backgroundColor: 'red',
    opacity: 0.7,
  },
  headerTitle: {
    textTransform: 'uppercase',
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
  },
});

export default Header;
