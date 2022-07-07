import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  textInput: {
    fontSize: 18,
    color: 'black',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    //   allows the text to be aligned centered with the icons
    alignItems: 'center',
    marginVertical: 15,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
  },
  iconContainer: {
    backgroundColor: '#e7e7e7',
    padding: 8,
    borderRadius: 10,
    marginRight: 10,
  },
  locationText: {
    fontWeight: '600',
  },
});

export default styles;
