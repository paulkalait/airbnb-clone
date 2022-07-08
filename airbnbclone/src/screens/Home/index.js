import React from 'react';
import {View, Text, ImageBackground, Pressable} from 'react-native';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      {/* search bar pressable is a customizable buttpn */}
      <Pressable
        style={styles.searchButton}
        //nagivate to search destination screen
        onPress={() => navigation.navigate('SearchDestinaton')}>
        <Fontisto name="search" size={25} color={'#f15454'} />
        <Text style={styles.searchButtonText}>Where are you Going?</Text>
      </Pressable>

      <ImageBackground
        source={require('../../../assets/images/wallpaper.jpg')}
        style={styles.image}>
        {/* tittle */}
        <Text style={styles.title}>Go Near</Text>

        {/* button */}
        <Pressable
          style={styles.button}
          onPress={() => console.log('Explore button clicked')}>
          <Text style={styles.buttonText}>Explore nearby Places</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
