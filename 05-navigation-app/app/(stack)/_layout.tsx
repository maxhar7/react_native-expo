import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const StackLayout = () => {
  return (
    <Stack
        screenOptions={
            {
                // headerShown: false, oculta el header
                headerShadowVisible: false,
                headerTitleAlign: 'center',
                contentStyle: {
                    backgroundColor: 'white'
                },
                animation: 'slide_from_bottom'
            }
        }
    >
        <Stack.Screen 
            name='home/index'
            options={{
                title: 'Home',
                // headerTitleAlign: 'center',
                // animation: 'slide_from_right'
            }}
        />
        <Stack.Screen 
            name='products/index'
            options={{
                title: 'Products',
                // headerTitleAlign: 'center',
                // animation: 'slide_from_bottom'
            }}
        />
        <Stack.Screen 
            name='profile/index'
            options={{
                title: 'Profile',
                // headerTitleAlign: 'center',
                // animation: 'slide_from_left'
            }}
        />
        <Stack.Screen 
            name='settings/index'
            options={{
                title: 'Settings',
                // headerTitleAlign: 'center',
                // animation: 'ios_from_right'
            }}
        />
    </Stack>
  )
}

export default StackLayout