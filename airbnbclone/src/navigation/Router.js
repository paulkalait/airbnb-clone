import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import SearchDestination from '../screens/SearchDestination';
import Guests from '../screens/Guests';
import HomeTabNavigator from './HomeTabNavigator';

const Stack = createStackNavigator();
const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'Home Tab'}
          component={HomeTabNavigator}
          //   to display different title
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name={'SearchDestinaton'}
          component={SearchDestination}
          //   to display different title
          options={{title: 'Search your destination'}}
        />
        <Stack.Screen
          name={'guests-screen'}
          component={Guests}
          //   to display different title
          options={{title: 'How many people?'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
