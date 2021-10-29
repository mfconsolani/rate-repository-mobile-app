import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import Text from './Text';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.dark,
  },
  scrollContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexGrow: 1,
    flexShrink: 1
  },
  pressable: {
    color: 'white',
    padding: 10
  }
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={styles.scrollContainer}>
      <Link to='/'>
      {/* <Pressable> */}
      <Text style={styles.pressable} fontWeight="bold">Repositories</Text>
      {/* </Pressable> */}
      </Link>
      <Link to='/signin'>
      {/* <Pressable> */}
      <Text style={styles.pressable} fontWeight="bold">Sign In</Text>
      {/* </Pressable> */}
      </Link>
      </ScrollView>
    </View>
  );
};

export default AppBar;

