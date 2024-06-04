import {Image, StyleSheet, Platform, View, Text} from 'react-native';

import { useAppSelector } from "@/app/redux/hooks";
import {selectCount} from "@/app/redux/counterSlice";

export default function ReviewScreen() {
    const count = useAppSelector(selectCount)

    return (
        <View style={styles.container}>
            <Text>ReviewScreen</Text>
            <Text>ReviewScreen</Text>
            <Text>ReviewScreen</Text>
            <Text>ReviewScreen</Text>
            <Text>ReviewScreen</Text>
            <Text>ReviewScreen</Text>

            <Text aria-label="Count" >
                Count is: {count}
            </Text>
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
