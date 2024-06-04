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
                name="welcome"
                options={{
                    title: 'WelcomeScreen',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
                    headerShown: false,
                    // headerStyle: {
                    //     backgroundColor: theme.colors.background
                    // },
                    // headerTintColor: '#fff',
                    // headerTitleAlign: 'center',
                    // headerTitleStyle: {
                    //     fontWeight: 'bold',
                    //     color: theme.colors.secondary
                    // },
                }}
            />
            <Tabs.Screen
                name="auth"
                options={{
                    title: 'AuthScreen',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="user-circle-o" color={color} />,
                    headerShown: false,
                    // headerStyle: {
                    //     backgroundColor: theme.colors.background
                    // },
                    // headerTintColor: '#fff',
                    // headerTitleAlign: 'center',
                    // headerTitleStyle: {
                    //     fontWeight: 'bold',
                    //     color: theme.colors.secondary
                    // },
                }}
            />
            <Tabs.Screen
                name="map"
                options={{
                    title: 'MapScreen',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="map-o" color={color} />,
                    headerShown: false
                }}
            />
            <Tabs.Screen
                name="deck"
                options={{
                    title: 'DeckScreen',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="list-alt" color={color} />,
                    headerShown: false
                }}
            />
        </Tabs>
    );
}
