import { Alert, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { Icon } from '@/components/common/icon';
import { blueDeFranceAlpha, honeyYellow } from '@/constants/colors';
import { getUser, isLoggedIn, logoutUser } from '@/contexts/user.context';
import { useState } from 'react';

export function User() {
    const [userState, setUserState] = useState<boolean>(false);

    const toggleUserState = (): void => setUserState(!userState);

    const onLogout = (): void => {
        toggleUserState();
        logoutUser();
        Alert.alert('Pomyślnie wylogowano!');
    };

    if (isLoggedIn()) {
        return (
            <TouchableOpacity>
                <Link href="/login" style={styles.link} onPress={onLogout}>
                    <Text>Wyloguj się, </Text>
                    <Text style={{ fontWeight: 800 }}>{getUser().login} </Text>
                    <Icon type={'user'} />
                </Link>
            </TouchableOpacity>
        );
    }

    return (
        <TouchableOpacity>
            <Link href="/login" style={styles.link}>
                <Text>Zaloguj się </Text>
                <Icon type={'user'} />
            </Link>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    link: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: blueDeFranceAlpha,
        color: honeyYellow,
        padding: 8,
        borderRadius: 16
    }
});