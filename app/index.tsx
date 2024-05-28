import {StyleSheet, Text, View} from "react-native";
import {Button, Divider, PaperProvider, useTheme} from 'react-native-paper';
import {Stack, useRouter} from "expo-router";

export default function Index() {
    const theme = useTheme();
    const router = useRouter();

    const styles = StyleSheet.create({
        container: {
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
            backgroundColor: theme.colors.background
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
        <PaperProvider>
            <View style={styles.container}>
                <Stack.Screen
                    options={{
                        // Hide the header for this route
                        headerShown: false,
                    }}
                />

                <Text style={styles.text}>
                    WelcomeScreen
                </Text>
                <Divider style={styles.divider}/>
                <Button
                    icon="google"
                    mode="contained-tonal"
                    style={styles.button}
                    onPress={() => router.push("/(tabs)/home")}
                >
                    Continue with Google
                </Button>
                <Divider style={styles.divider}/>
                <Button
                    icon="account"
                    mode="contained-tonal"
                    style={styles.button}
                    onPress={() => router.push("/(tabs)/explore")}
                >
                    Continue as Guest
                </Button>
            </View>
        </PaperProvider>
    );

}