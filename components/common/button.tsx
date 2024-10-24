import React, { Component, ReactNode } from 'react';
import { Text, TouchableOpacity, StyleSheet, View, DimensionValue, Alert } from 'react-native';
import { constantStyles } from '@/constants/styles';
import { Href, useRouter } from 'expo-router';

interface ButtonProps {
    label: string;
    icon?: ReactNode;
    iconLeft?: boolean;
    disabled?: boolean;
    disabledInfo?: string;
    link?: Href<string | Object>;
    width?: DimensionValue;
    onClick?: () => void;
}

export function Button({ label, icon, iconLeft = false, link, disabled, disabledInfo, width, onClick }: ButtonProps) {
    const router = useRouter();

    const styles = buttonStyles(width ?? 225, 10);
    const onPressDisabled = () => {
        if (disabledInfo) {
            Alert.alert(disabledInfo);
        }
    };
    const onPress = () => {
        if (link) {
            router.push(link);
        }
    };

    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={disabled ? styles.disabledButton : styles.button} onPress={disabled ? onPressDisabled : onClick ?? onPress}>
                <View style={styles.buttonBox}>
                    {iconLeft && <View style={styles.iconContainer}>{icon}</View>}
                    <Text style={styles.buttonText}>
                        {iconLeft ? ' ' : ''}{label}
                    </Text>
                    {!iconLeft && <View style={styles.iconContainer}>{icon}</View>}
                </View>
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
        buttonBox: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
        },
        buttonText: {
            color: '#fff',
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
            margin,
            opacity: 0.618
        },
        iconContainer: {
            marginLeft: 4,
            marginTop: 2
        }
    });
}