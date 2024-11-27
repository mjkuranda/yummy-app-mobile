import { Link } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { blueDeFranceAlpha, honeyYellow } from '@/constants/colors';

export function About() {
    return (
        <TouchableOpacity>
            <Link href="/about" style={styles.link}>
                <Text>Info   </Text>
                <Icon name="info" />
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