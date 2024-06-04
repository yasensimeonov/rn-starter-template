import React, { Component } from 'react';
import {View, Text, ScrollView, StyleSheet, Dimensions} from 'react-native';
import {SlideData} from "@/types";
import {Button, Divider, useTheme} from 'react-native-paper';

const SCREEN_WIDTH = Dimensions.get('window').width;

export type SlidesProps = {
    data: SlideData[];
    onComplete?: () => void;
}

export default function Slides({ data, onComplete }: SlidesProps) {
    const theme = useTheme();

    function renderSlides() {
        return data.map((slide, index) => {
            return (
                <View
                    key={slide.text}
                    style={ [styles.slideStyle, { backgroundColor: slide.color }] }
                >
                    <Text style={styles.textStyle}>{slide.text}</Text>
                    { renderLastSlide(index) }
                </View>
            )
        });
    }

    function renderLastSlide(index: number) {
        if (index === data.length - 1) {
            return (
                <>
                    <Divider style={styles.divider}/>
                    <Button
                        icon="account"
                        mode="contained-tonal"
                        style={styles.button}
                        // onPress={() => router.push("/review")}
                        onPress={ onComplete }
                    >
                        Proceed to Login
                    </Button>
                </>
            )
        }
    }

    const styles = StyleSheet.create({
        slideStyle: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            width: SCREEN_WIDTH,
        },
        textStyle: {
            fontSize: 30,
            color: 'white',
            fontWeight: 'bold',
            textAlign: 'center'
        },
        button: {
            alignItems: 'center',
            // marginTop: 20
            // marginBottom: 100
        },
        divider: {
            width: '60%',
            color: theme.colors.secondary,
            marginTop: 10,
            marginBottom: 10
        },
    });

    return (
        <ScrollView
            horizontal={true}
            style={{ flex: 1 }}
            pagingEnabled={true}
        >
            { renderSlides() }
        </ScrollView>
    );
}
