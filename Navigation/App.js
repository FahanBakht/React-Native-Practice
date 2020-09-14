import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import {Stack} from './src/Navigation'
import { Login } from './src/screens/Login';
import { Register } from './src/screens/Register';

export default function App() { 
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}