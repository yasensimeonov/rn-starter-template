import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import {lightScheme} from "@/theme/lightScheme";
import {darkScheme} from "@/theme/darkScheme";
import {MD3DarkTheme, MD3LightTheme, PaperProvider} from "react-native-paper";
import {useColorScheme} from "react-native";

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
      <PaperProvider theme={theme.colors}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
        </Stack>
      </PaperProvider>
  );

}
