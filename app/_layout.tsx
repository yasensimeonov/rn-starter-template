import { useFonts } from 'expo-font';
import {router, Stack} from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect } from 'react';
import 'react-native-reanimated';
import {lightScheme} from "@/theme/lightScheme";
import {darkScheme} from "@/theme/darkScheme";
import {Button, MD3DarkTheme, MD3LightTheme, PaperProvider} from "react-native-paper";
import {useColorScheme} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {Ionicons} from "@expo/vector-icons";
import { Provider } from "react-redux";
import { store } from "@/app/redux/store";

const LightTheme = {
  ...MD3LightTheme,
  colors: lightScheme,
};

const DarkTheme = {
  ...MD3DarkTheme,
  colors: darkScheme,
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? DarkTheme : LightTheme;
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
      <Provider store={store}>
          <PaperProvider theme={theme.colors}>
              <Stack>
                  <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
                  <Stack.Screen name="review"
                                options={{
                                    headerShown: true,
                                    title: 'Review Jobs',
                                    headerStyle: { backgroundColor: '#f4511e' },
                                    headerTintColor: '#fff',
                                    headerTitleStyle: {
                                        fontWeight: 'bold',
                                    },
                                    headerRight: () => (
                                        <Button
                                            onPress={ () => { router.push("/settings") } }
                                            children={ <Ionicons name='settings-sharp' size={ 22 } color='white' style={ { marginLeft: 10 } }/> }
                                        />
                                    )
                                }}
                  />
                  <Stack.Screen name="settings"
                                options={{
                                    headerShown: true,
                                    title: 'Settings'
                                }}
                  />
              </Stack>
          </PaperProvider>
      </Provider>
  );
}
