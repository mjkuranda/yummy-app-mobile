import React, { useEffect, useRef } from 'react';
import { Animated, View, StyleSheet, Easing, DimensionValue } from 'react-native';
import { loadingImage } from '@/assets/assets';

interface LoaderProps {
    size?: DimensionValue
}

export function Loader({ size }: LoaderProps) {
    const rotationValue = useRef(new Animated.Value(0)).current;
    const styles = withSizeStyles(size);

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
function withSizeStyles(size: DimensionValue = 100) {
    return StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        image: {
            width: size,
            height: size
        },
    });
}