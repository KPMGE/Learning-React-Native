import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './Home';
import Result from './Result';

const Stack = createStackNavigator();

export default function Index() {
  return (
    <NavigationContainer initialRouteName='Home'>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen 
          name='Home'
          component={Home}
        />

        <Stack.Screen 
          name='Result'
          component={Result}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
