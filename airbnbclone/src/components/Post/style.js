import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 5
  },
  image: {
    width: '100%',
    // define aspect ratio the image will always be 3 width but 2 hieght for all device screens
    resizeMode: 'cover',
    borderRadius: 15,
    aspectRatio: 3 / 2,
  },
  bedrooms: {
    marginVertical: 10,
    fontSize: 16,
    color: 'gray',
  },
  description: {
    fontSize: 18,
    textAlign: 'left',
    lineHeight: 26,
  },
  prices: {
    fontSize: 18,
    marginVertical: 10,
  },
  price: {
    fontWeight: 'bold',
  },
  oldPrice: {
    color: 'gray',
    textDecorationLine: 'line-through',
  },
  totalPrice: {
    color: 'gray',
    textDecorationLine: 'underline',
  },
});

export default styles;
