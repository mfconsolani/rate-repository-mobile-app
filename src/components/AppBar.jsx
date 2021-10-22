import React from 'react';
import { View, StyleSheet } from 'react-native-web';
import Constants from 'expo-constants';
import { Pressable } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.dark,
  },
  pressable: {
    color: 'white'
  }
});

const AppBar = () => {
  return (
  <View style={styles.container}>
    <Pressable style={styles.pressable}>Repositories</Pressable>
  </View>
  );
};

export default AppBar;

