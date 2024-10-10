import { DetailedDish } from '@/types/api.types';
import { StyleSheet, View } from 'react-native';
import { Heading } from '@/components/common/heading';
import HTMLView from 'react-native-htmlview';

interface DishDescriptionProps {
    dish: DetailedDish;
    description?: string;
}

export function DishDescription({ dish, description }: DishDescriptionProps) {
    const htmlContent = description && description.length > 0 ? `<p>${description}</p>` : `<p>${dish.description}</p>`;

    return (
        <View style={styles['dish-description']}>
            <Heading level={5}>Opis:</Heading>
            <HTMLView value={htmlContent} stylesheet={styles} />
        </View>
    );
}

const styles = StyleSheet.create({
    'dish-description': {
        marginVertical: 8
    },
    p: {
        lineHeight: 20,
        textAlign: 'justify'
    }
});