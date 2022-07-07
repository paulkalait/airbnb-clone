import {View, FlatList} from 'react-native';
import React from 'react';

import feed from '../../../assets/data/feed';
import Post from '../../components/Post';

const index = () => {
  // <Flatlist /> takes two args. data which is the aray of objects, the 'feed' data, and renderItem which is each item data in the array to be mapped into the Post component
  return (
    <View>
      <FlatList data={feed} renderItem={({item}) => <Post post={item} />} />
    </View>
  );
};

export default index;
