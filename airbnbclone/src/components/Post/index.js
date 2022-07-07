import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import styles from './style.js';

const Post = ({post}) => {
  return (
    <View style={styles.container}>
      {/* Image */}
      <Image
        style={styles.image}
        source={{
          uri: post.image,
        }}
      />
      {/* bed and bedroom */}
      <Text style={styles.bedrooms}>
        {post.bed} bed {post.bedroom} bedroom
      </Text>
      {/* Description*/}
      <Text style={styles.description} numberOfLines={2}>
        {' '}
        {post.type}. {post.title}
      </Text>
      {/* old and new price*/}
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>${post.oldPrice} </Text>
        <Text style={styles.price}> ${post.newPrice}</Text> / night
      </Text>
      {/* total price*/}
      <Text style={styles.totalPrice}>${post.totalPrice} total</Text>
    </View>
  );
};

export default Post;
