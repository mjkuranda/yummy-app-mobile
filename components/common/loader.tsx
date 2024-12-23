import React, { useEffect, useRef } from 'react';
import { Animated, View, StyleSheet, Easing, DimensionValue } from 'react-native';
import { loadingImage } from '@/assets/assets';

interface LoaderProps {
    size?: DimensionValue;
    isFlex?: boolean;
}

export function Loader({ size, isFlex }: LoaderProps) {
    const rotationValue = useRef(new Animated.Value(0)).current;
    const styles = withSizeStyles(size, isFlex);

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
function withSizeStyles(size: DimensionValue = 100, isFlex: boolean = true) {
    return StyleSheet.create({
        container: {
            ...(isFlex && { flex: 1 }),
            justifyContent: 'center',
            alignItems: 'center',
        },
        image: {
            width: size,
            height: size
        },
    });
}