import React, { ReactNode } from 'react';
import { StyleSheet, Text, ViewStyle } from 'react-native';

interface HeadingProps {
    level: 1 | 2 | 3 | 4 | 5;
    children: ReactNode;
    style?: ViewStyle;
}

export function Heading({ level, children, style }: HeadingProps) {
    return (
        <Text style={{ ...style, ...styles[`h${level}`] }}>
            {children}
        </Text>
    );
}

const styles = StyleSheet.create({
    h1: { fontSize: 32, fontWeight: 'bold' },
    h2: { fontSize: 28, fontWeight: 'bold' },
    h3: { fontSize: 24, fontWeight: 'bold' },
    h4: { fontSize: 20, fontWeight: 'bold' },
    h5: { fontSize: 16, fontWeight: 'bold' }
});