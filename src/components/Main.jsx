import React from 'react';
import AppBar from './AppBar';
import { View, StyleSheet } from 'react-native';
import RepositoryList from './RepositoryList';
import { Route, Switch } from 'react-router-native';
import SignIn from './SignIn';


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    // backgroundColor: "black"
  }
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar/>
      <Switch>
        <Route path='/' exact>
          <RepositoryList/>
        </Route>
        <Route path='/signin' exact>
          <SignIn/>
        </Route>
      </Switch>
    </View>
  );
};

export default Main;
