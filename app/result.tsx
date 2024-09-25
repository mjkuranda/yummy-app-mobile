import { Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function ResultScreen() {
    const { id, sourceUrl } = useLocalSearchParams();

    return <Text style={{ color: 'white' }}>{id} {sourceUrl}</Text>;
}