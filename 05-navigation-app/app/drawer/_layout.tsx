import { View, Text } from 'react-native'
import React from 'react'
import Drawer from 'expo-router/drawer'
import { Ionicons } from '@expo/vector-icons';

const DrawerLayout = () => {
  return (
    <Drawer
      screenOptions={{
        overlayColor: 'rgba(0,0,0,0.5)',
        drawerActiveTintColor: 'indigo',
        headerShadowVisible: false,
        sceneStyle: {
          backgroundColor: 'white',
        },
        drawerContentStyle: {
          backgroundColor: 'white',
        }
      }}
    >
        <Drawer.Screen
          name="user/index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'User',
            title: 'User',
            drawerIcon: ({color, size}) => (
              <Ionicons name="person-circle-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="schedule/index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Schedule',
            title: 'Schedule',
            drawerIcon: ({color, size}) => (
              <Ionicons name="calendar-outline" size={size} color={color} />
            ),
          }}
        />
      </Drawer>
  );
}

export default DrawerLayout