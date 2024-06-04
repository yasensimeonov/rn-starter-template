import {Image, StyleSheet, Platform, View, Text} from 'react-native';
import Slides from "@/components/Slides";
import {SlideData} from "@/types";
import {router} from "expo-router";

const SLIDE_DATA: SlideData[] = [
    { text: 'Welcome to JobApp', color: '#03A9F4' },
    { text: 'Use this to get a job', color: '#009688' },
    { text: 'Set your location, then swipe away', color: '#03A9F4' }
];

export default function WelcomeScreen() {
    function onSlidesComplete() {
        router.push("/(tabs)/auth")
    }

    return (
        <View style={styles.container}>
            <Slides data={SLIDE_DATA} onComplete={ onSlidesComplete } />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
