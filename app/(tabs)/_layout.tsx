import { Tabs } from 'expo-router';
import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {PaperProvider, useTheme} from "react-native-paper";
import {Image} from "react-native";
import {Ionicons} from "@expo/vector-icons";

export default function TabLayout() {
  const theme = useTheme();

  return (
    <Tabs
      screenOptions={{
          tabBarActiveTintColor: theme.colors.tertiary, tabBarInactiveTintColor: theme.colors.secondary,
          tabBarActiveBackgroundColor: theme.colors.background,
          tabBarInactiveBackgroundColor: theme.colors.background,
          tabBarStyle: {
              borderColor: theme.colors.background
          }
      }}>
      <Tabs.Screen
        name="home"
        options={{
            title: 'Home',
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
            headerStyle: {
                backgroundColor: theme.colors.background
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
            headerTitleStyle: {
                fontWeight: 'bold',
                color: theme.colors.secondary
            },
            headerLeft: () => (
                <Ionicons name='search' size={24} color='white' style={{marginLeft: 10}}/>
            ),
            headerRight: () => (
                <Ionicons name='filter' size={24} color='white' style={{marginRight: 10}}/>
            ),
            headerTitle: () => (
                <Image source={require('../../assets/images/react-logo.png')}
                       style={{width: 35, height: 35, resizeMode: 'contain'}}/>
            )
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
            headerStyle: {
                backgroundColor: theme.colors.background
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
            headerTitleStyle: {
                fontWeight: 'bold',
                color: theme.colors.secondary
            },
        }}
      />
    </Tabs>
  );
}
