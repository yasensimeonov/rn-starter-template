import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Button, Divider, PaperProvider, useTheme} from 'react-native-paper';
import {Stack, useRouter} from "expo-router";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import {
    decrement,
    increment,
    // incrementAsync,
    incrementByAmount,
    incrementIfOdd,
    selectCount,
    selectStatus,
} from "@/app/redux/counterSlice";

export default function Index() {
    const theme = useTheme();
    const router = useRouter();
    const dispatch = useAppDispatch()
    const count = useAppSelector(selectCount)

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
        },
        row: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
        },
        buttonText: {
            color: "rgb(112, 76, 182)",
            fontSize: 32,
            textAlign: "center",
        },
        value: {
            fontSize: 78,
            paddingHorizontal: 16,
            marginTop: 2,
            color: "white",
        },
        buttonTouchable: {
            backgroundColor: "rgba(112, 76, 182, 0.1)",
            borderRadius: 2,
            paddingLeft: 12,
            paddingRight: 12,
            paddingBottom: 4,
            margin: 2,
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
                    Splash Screen. Click below to proceed.
                </Text>
                <Divider style={styles.divider}/>

                <View style={styles.row}>
                    <TouchableOpacity
                        style={styles.buttonTouchable}
                        aria-label="Decrement value"
                        onPress={() => dispatch(decrement())}
                    >
                        <Text style={styles.buttonText}>-</Text>
                    </TouchableOpacity>
                    <Text aria-label="Count" style={styles.value}>
                        {count}
                    </Text>
                    <TouchableOpacity
                        style={styles.buttonTouchable}
                        aria-label="Increment value"
                        onPress={() => dispatch(increment())}
                    >
                        <Text style={styles.buttonText}>+</Text>
                    </TouchableOpacity>
                </View>

                <Divider style={styles.divider}/>
                <Button
                    icon="google"
                    mode="contained-tonal"
                    style={styles.button}
                    onPress={() => router.push("/(tabs)/welcome")}
                >
                    Begin auth flow
                </Button>
                <Divider style={styles.divider}/>
                <Button
                    icon="account"
                    mode="contained-tonal"
                    style={styles.button}
                    onPress={() => router.push("/review")}
                >
                    Go to Stack flow
                </Button>
            </View>
        </PaperProvider>
    );
}
