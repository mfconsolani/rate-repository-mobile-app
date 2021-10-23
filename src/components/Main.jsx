import React from 'react';
import AppBar from './AppBar';
import { View, StyleSheet } from 'react-native';
import RepositoryList from './RepositoryList'

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: "black"
  }
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar/>
      <RepositoryList/>
    </View>
  );
};

export default Main;
