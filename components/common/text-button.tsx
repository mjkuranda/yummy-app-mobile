import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { spanishBlue } from '@/constants/colors';

interface TextButtonProps {
    label: string;
    onClick: (e: any) => void;
}

export function TextButton({ label, onClick }: TextButtonProps) {
    return (
        <TouchableOpacity onPress={onClick}>
            <Text style={styles['text-button__label']} data-underline={true}>{label}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    'text-button__label': {
        color: spanishBlue,
        textDecorationLine: 'underline'
    }
});