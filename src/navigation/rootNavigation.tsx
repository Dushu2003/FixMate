import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Stack } from './instances';

// import { AuthSection } from './AuthRoutes';
import { MainSection } from './MainRoutes';


export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        {/* {AuthSection()} */}

        {MainSection()}

      </Stack.Navigator>
    </NavigationContainer>
  );
}