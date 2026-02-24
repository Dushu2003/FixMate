import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Routes } from './constants';

import Home from '../screens/home/view/home';
import Chat from '../screens/chat/view/chat';
import Profile from '../screens/Profile/view/profile';

import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === Routes.Home) {
            iconName = focused ? 'home' : 'home-outline';
          } 
          else if (route.name === Routes.Chat) {
            iconName = focused ? 'chatbubble' : 'chatbubble-outline';
          } 
          else if (route.name === Routes.Profile) {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },

        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name={Routes.Home} component={Home} />
      <Tab.Screen name={Routes.Chat} component={Chat} />
      <Tab.Screen name={Routes.Profile} component={Profile} />
    </Tab.Navigator>
  );
}