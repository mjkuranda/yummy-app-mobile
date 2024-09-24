import React, { ReactNode } from 'react';
import { Text, Linking, TouchableOpacity } from 'react-native';

interface LinkProps {
    href: string;
    children: ReactNode;
}

export function Link({ href, children }: LinkProps) {
    const handlePress = () => {
        Linking.openURL(href);
    };

    return (
        <TouchableOpacity onPress={handlePress}>
            <Text style={{ color: 'blue' }}>
                {children}
            </Text>
        </TouchableOpacity>
    );
}