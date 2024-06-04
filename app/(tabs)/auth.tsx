import {StyleSheet, Image, Platform, View, Text} from 'react-native';
import {Button, Divider, useTheme} from "react-native-paper";
import {useRouter} from "expo-router";

export default function AuthScreen() {
  const theme = useTheme();
  const router = useRouter();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      alignItems: 'center',
      // marginTop: 20
      // marginBottom: 100
    },
    image: {
      // marginBottom: 280,
      resizeMode: 'contain',
      height: 300,
      width: 300
    },
    divider: {
      width: '60%',
      color: theme.colors.secondary,
      marginTop: 10,
      marginBottom: 10
    },
    text: {
      color: theme.colors.secondary,
    }
  });

  return (
      <View style={styles.container}>
        <Text>AuthScreen</Text>
        <Text>AuthScreen</Text>
        <Text>AuthScreen</Text>
        <Text>AuthScreen</Text>
        <Text>AuthScreen</Text>
        <Text>AuthScreen</Text>
        <Divider style={styles.divider}/>
        <Button
            icon="google"
            mode="contained-tonal"
            style={styles.button}
            onPress={() => router.push("/(tabs)/map")}
        >
          Go to Map (Tab)
        </Button>
      </View>
  );
}
