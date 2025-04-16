import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons
//imort colors by constants
import COLORS from '../../constants/theme'; // Adjusted the path to match the correct location

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary, // Active tab color
        tabBarInactiveTintColor: COLORS.textTwo, // Inactive tab color
        tabBarStyle: {
          backgroundColor: COLORS.white, // Tab bar background color
          borderTopWidth: 0,
          position: 'absolute',
          elevation: 0,
          height: 60,
          paddingBottom: 12,
        },
      }}
      >
      <Tabs.Screen
        name="dashboard"
        options={{
          tabBarIcon: ({ size, color }) => <Ionicons name="home" size={size} color={color} />,
        }}
      />
        <Tabs.Screen
          name="list"
          options={{
            tabBarIcon: ({ size, color }) => <Ionicons name="list" size={size} color={color} />,
          }}
        />
      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({ size, color }) => <Ionicons name="search" size={size} color={color} />,
        }}
      />
       
        <Tabs.Screen
          name="vehicle"
          options={{
            tabBarIcon: ({ size, color }) => <Ionicons name="car" size={size} color={color} />,
          }}
        /> 
        <Tabs.Screen
          name="employee"
          options={{
            tabBarIcon: ({ size, color }) => <Ionicons name="people" size={size} color={color} />,
          }}
        />
    </Tabs>
  );
}