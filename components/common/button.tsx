import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View, Alert, DimensionValue } from 'react-native';
import { constantStyles } from '@/constants/styles';

interface ButtonProps {
    label: string;
    link: string;
    disabled?: boolean;
}

export function Button({ label, link, disabled }: ButtonProps) {
    const styles = buttonStyles(225, 10);
    const onPress = () => {
        Alert.alert('Naciśnięto!');
    };

    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={disabled ? styles.disabledButton : styles.button} onPress={onPress}>
                <Text style={styles.buttonText}>{label}</Text>
            </TouchableOpacity>
        </View>
    );
}

function buttonStyles(width: DimensionValue, margin: DimensionValue) {
    return StyleSheet.create({
        buttonContainer: {
            ...constantStyles.flexCenter,
            width
        },
        button: {
            backgroundColor: '#3f51b5',
            color: 'white',
            borderStyle: 'solid',
            borderBlockColor: '#3f51b5',
            borderRadius: 10,
            paddingVertical: 12,
            paddingHorizontal: 30,
            width,
            margin
        },
        buttonText: {
            color: '#fff', // Kolor tekstu
            fontSize: 16,
            textAlign: 'center'
        },
        disabledButton: {
            backgroundColor: '#3f51b5',
            color: 'white',
            borderStyle: 'solid',
            borderBlockColor: '#3f51b5',
            borderRadius: 10,
            paddingVertical: 12,
            paddingHorizontal: 30,
            width,
            opacity: 0.618
        }
    });
}