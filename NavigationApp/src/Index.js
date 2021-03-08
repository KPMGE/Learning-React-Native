import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home'
import About from './pages/About'
import Settings from './pages/Settings'

const Stack = createStackNavigator();

export default App = () => {
  return (
    <NavigationContainer initialRouteName='Home'>
      <Stack.Navigator>
        <Stack.Screen 
          name='Home'
          component={Home}
          options={{
            title: 'Hello Guy',
            headerStyle: {
              backgroundColor: '#0975c8'
            },
            headerTintColor: '#fff'
          }}
        />

        <Stack.Screen 
          name='About'
          component={About}
          options={{
            title: 'About Page',
            headerStyle: {
              backgroundColor: '#a91414'
            },
            headerTintColor: '#fff'
          }}
        />

        <Stack.Screen 
          name='Settings'
          component={Settings}
          options={{
            title: 'Settings Page',
            headerStyle: {
              backgroundColor: '#a10c9f'
            },
            headerTintColor: '#fff'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}