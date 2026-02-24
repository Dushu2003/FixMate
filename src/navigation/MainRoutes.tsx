import React from 'react';

import { Routes } from './constants';
import {Stack} from './instances';  
import { BottomTabs } from './bottomTabs';

function MainSection() {
  return (
    <Stack.Group screenOptions={{ headerShown: false }}>
      <Stack.Screen name={Routes.Home} component={BottomTabs} />
      <Stack.Screen name={Routes.Chat} component={BottomTabs} />
      <Stack.Screen name={Routes.Profile} component={BottomTabs} />
    </Stack.Group>
  );
}

export { MainSection };