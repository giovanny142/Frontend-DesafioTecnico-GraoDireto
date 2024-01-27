import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ListRestaurants from './Screens/Home';
import DetailsRestaurant from './Screens/DetailsRestaurant';
import LoginScreen from './Screens/Login';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
      <Stack.Navigator initialRouteName='listRestaurants'>
        <Stack.Screen name="login" options={{headerShown: false}} component={LoginScreen} />
        <Stack.Screen name="detailsRestaurant" options={{headerShown: false}} component={DetailsRestaurant} />
        <Stack.Screen name="listRestaurants" options={{headerShown: false}} component={ListRestaurants} />
      </Stack.Navigator>
  );
};

export default AppNavigator;