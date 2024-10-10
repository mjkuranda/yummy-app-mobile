import { StyleSheet, TextInput, View } from 'react-native';
import { Heading } from '@/components/common/heading';

interface InputProps {
    label: string;
    value: string;
    isPassword?: boolean;
    onChange: (newValue: string) => void;
}

export function Input({ label, value, isPassword = false, onChange }: InputProps) {
    return (
        <View>
            <Heading level={5} style={{ marginLeft: 16, marginBottom: 4 }}>{label}:</Heading>
            <TextInput
                style={styles.input}
                onChangeText={onChange}
                value={value}
                secureTextEntry={isPassword}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#ffffff55',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'black',
        width: 256,
        paddingLeft: 16
    }
});