/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import SearchResults from './src/screens/SearchResults'
import HomeScreen from './src/screens/Home';
import Post from './src/components/Post';
import feed from './assets/data/feed';

//this data will be feed in as properties in the Post component as post
const post = feed[0];

const App = () => {
  return (
    <>
      <SafeAreaView>
        {/* <HomeScreen /> */}
        {/*  Post is the name of my component, it is not highlighted green*/}
         {/* <Post post={post} /> */}
         <SearchResults />
      </SafeAreaView>
    </>
  );
};

export default App;
