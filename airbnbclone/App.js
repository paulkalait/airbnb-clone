/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import SearchResults from './src/screens/SearchResults';
import HomeScreen from './src/screens/Home';
import Post from './src/components/Post';
import feed from './assets/data/feed';
import SearchDestination from './src/screens/SearchDestination';
import Guests from './src/screens/Guests';
import Router from './src/navigation/Router';
//this data will be feed in as properties in the Post component as post
const post = feed[0];

const App = () => {
  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <Router />
    </>
  );
};

export default App;
