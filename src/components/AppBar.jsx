import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.dark,
    // padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexGrow: 1,
    flexShrink: 1,
  },
  pressable: {
    color: 'white',
    padding: 10
  }
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Pressable>
      <Text style={styles.pressable} fontWeight="bold"  >Repositories</Text>
      </Pressable>
      <Pressable>
      <Text style={styles.pressable} fontWeight="bold"  >Repositories</Text>
      </Pressable>
    </View>
  );
};

export default AppBar;

