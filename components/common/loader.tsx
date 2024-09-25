import React, { useEffect, useRef } from 'react';
import { Animated, View, StyleSheet, Easing } from 'react-native';
import { loadingImage } from '@/assets/assets';

export function Loader() {
    const rotationValue = useRef(new Animated.Value(0)).current;

    const startRotation = () => {
        Animated.loop(
            Animated.timing(rotationValue, {
                toValue: 1,
                duration: 1000,
                easing: Easing.linear,
                useNativeDriver: true
            })
        ).start();
    };

    useEffect(() => {
        startRotation();
    }, []);

    const rotate = rotationValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    });

    return (
        <View style={styles.container}>
            <Animated.Image
                source={loadingImage}
                style={[styles.image, { transform: [{ rotate }] }]}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100, // Rozmiar obrazka
    },
});