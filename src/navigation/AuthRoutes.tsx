import React from 'react';
import Login from '../screens/auth/view/login';
import Signup from '../screens/auth/view/signup';
import { Routes } from './constants';
import { Stack } from './instances';

function AuthSection() {
  return (
    <Stack.Group screenOptions={{ headerShown: false }}>
      <Stack.Screen name={Routes.Login} component={Login} />
      <Stack.Screen name={Routes.Signup} component={Signup} />
    </Stack.Group>
  );
}

export { AuthSection };