import React from 'react';
import AppBar from './AppBar';
import { Text, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1
  }
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar/>
    </View>
  );
};

export default Main;
