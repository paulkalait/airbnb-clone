import {View, Text, Pressable} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const LocationDetails = ({item}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      style={styles.row}
      onPress={() => navigation.navigate('guests-screen')}>
      <View style={styles.iconContainer}>
        <Entypo name={'location-pin'} size={30} />
      </View>
      <Text style={styles.locationText}>{item.description}</Text>
    </Pressable>
  );
};

export default LocationDetails;
