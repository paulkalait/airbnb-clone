import {View, Text, Pressable} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
// import styles from './styles'
const Guests = () => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  return (
    <View>
      {/* row 1 : adults*/}
      <View style={styles.row}>
        {/* Titles container */}
        <View>
          <Text style={styles.adults}>Adults</Text>
          <Text style={styles.ages}>Ages 13 or above</Text>
        </View>
        {/* Buttons container*/}
        <View style={styles.buttonsContainer}>
          {/* minus */}
          {/* will take the max value oout of the two, 0  or # of adults, can never be negative because both start from 0 */}
          <Pressable onPress={() => setAdults(Math.max(0, adults - 1))}>
            <View style={styles.button}>
              <Entypo name={'minus'} size={30} style={styles.addAndMinus} />
            </View>
          </Pressable>
          {/* value */}
          <Text style={styles.number}> {adults}</Text>
          {/* plus */}
          <Pressable onPress={() => setAdults(adults + 1)}>
            <View style={styles.button}>
              <Entypo name={'plus'} size={30} style={styles.addAndMinus} />
            </View>
          </Pressable>
        </View>
      </View>

      {/* *******************************Children********************************** */}

      {/* row 2 : adults*/}
      <View style={styles.row}>
        {/* Titles container */}
        <View>
          <Text style={styles.adults}>Children</Text>
          <Text style={styles.ages}>Ages 2-12</Text>
        </View>
        {/* Buttons container*/}
        <View style={styles.buttonsContainer}>
          {/* minus */}
          {/* will take the max value oout of the two, 0  or # of children, can never be negative because both start from 0 */}
          <Pressable onPress={() => setChildren(Math.max(0, children - 1))}>
            <View style={styles.button}>
              <Entypo name={'minus'} size={30} style={styles.addAndMinus} />
            </View>
          </Pressable>
          {/* value */}
          <Text style={styles.number}> {children}</Text>
          {/* plus    inital usestate of children + 1*/}
          <Pressable onPress={() => setChildren(children + 1)}>
            <View style={styles.button}>
              <Entypo name={'plus'} size={30} style={styles.addAndMinus} />
            </View>
          </Pressable>
        </View>
      </View>

      {/* *******************************Infants********************************** */}
      <View style={styles.row}>
        {/* Titles container */}
        <View>
          <Text style={styles.adults}>Infants</Text>
          <Text style={styles.ages}>Under 2</Text>
        </View>
        {/* Buttons container*/}
        <View style={styles.buttonsContainer}>
          {/* minus */}
          {/* will take the max value oout of the two, 0  or # of infants, can never be negative because both start from 0 */}
          <Pressable onPress={() => setInfants(Math.max(0, infants - 1))}>
            <View style={styles.button}>
              <Entypo name={'minus'} size={30} style={styles.addAndMinus} />
            </View>
          </Pressable>
          {/* value */}
          <Text style={styles.number}> {infants}</Text>
          {/* plus */}
          <Pressable onPress={() => setInfants(infants + 1)}>
            <View style={styles.button}>
              <Entypo name={'plus'} size={30} style={styles.addAndMinus} />
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  ); 
};

export default Guests;
