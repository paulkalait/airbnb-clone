import {View, Text, TextInput, FlatList} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import searchResults from '../../../assets/data/search';
import LocationDetails from '../../components/loactionDetails';

const SearchDestination = () => {
  const [inputText, setInputText] = useState('');

  return (
    <View style={styles.container}>
      {/*  input component */}
      <TextInput
        style={styles.textInput}
        placeholder="Where are you going?"
        value={inputText}
        onChangeText={setInputText}
      />

      {/*  list of component*/}
      <FlatList
        data={searchResults}
        renderItem={({item}) => <LocationDetails item={item} />}
      />
    </View>
  );
};

export default SearchDestination;
