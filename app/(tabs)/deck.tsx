import {Image, StyleSheet, Platform, View, Text} from 'react-native';

export default function DeckScreen() {
    return (
        <View style={styles.container}>
            <Text>DeckScreen</Text>
            <Text>DeckScreen</Text>
            <Text>DeckScreen</Text>
            <Text>DeckScreen</Text>
            <Text>DeckScreen</Text>
            <Text>DeckScreen</Text>
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
