import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import { Routes } from './constants';

import Home from '../screens/home/view/home';
import Booking from '../screens/booking/view/booking';
import Profile from '../screens/Profile/view/profile';
import { LightColors } from '../constants/color';

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
          else if (route.name === Routes.Booking) {
            iconName = focused ? 'calendar' : 'calendar-outline';
          } 
          else if (route.name === Routes.Profile) {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },

        tabBarActiveTintColor: LightColors.primary.brand,
        tabBarInactiveTintColor:  LightColors.primary.brand,
      })}
    >
      <Tab.Screen name={Routes.Home} component={Home} />
      <Tab.Screen name={Routes.Booking} component={Booking} />
      <Tab.Screen name={Routes.Profile} component={Profile} />
    </Tab.Navigator>
  );
}