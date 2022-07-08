import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  topView: {
    justifyContent: 'space-between',
    height: '100%'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f7f7f7',
    marginHorizontal: 20,
    alignItems: 'center',
  },
  adults: {
    fontWeight: 'bold',
    marginBottom: 3
  },
  ages: {
    color: 'grey',
    fontWeight: '400',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  button: {
    borderWidth: 1,
    borderColor: 'lightgrey',
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  number: {
    marginHorizontal: 12,
    marginTop: 5,
    fontSize: 15,
  },
  addAndMinus: {
    fontSize: 20,
    color: 'grey',
  },
  search: {
    marginBottom: 20,
    backgroundColor: '#f15454',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  searchText: {
    fontSize: 18,
    color: 'white',
    fontWeight: '700'
  }
});

export default styles;
