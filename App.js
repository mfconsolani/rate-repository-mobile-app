// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Main from './src/components/Main';
import RepositoryList from './src/components/RepositoryList';
import { View } from 'react-native';
// import { StyleSheet, Text, View, Pressable, Alert } from 'react-native';

const App = () => {
  return (
    <View>
      <Main/>
      <RepositoryList/>
    </View>
  );
};

export default App;

