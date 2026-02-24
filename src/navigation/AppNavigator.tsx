import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Stack } from './instances';
import { Routes } from './constants';
import Login from '../screens/auth/view/login';
import Signup from '../screens/auth/view/signup';
import App from '../../App';





export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={Routes.Login} component={Login} />
        <Stack.Screen name={Routes.Signup} component={Signup} />
        <Stack.Screen name={Routes.MainTabs} component={App} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}