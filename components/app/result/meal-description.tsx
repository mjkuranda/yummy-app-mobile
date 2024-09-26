import { DetailedMeal } from '@/types/api.types';
import { StyleSheet, View } from 'react-native';
import { Heading } from '@/components/common/heading';
import HTMLView from 'react-native-htmlview';

interface MealDescriptionProps {
    meal: DetailedMeal;
    description?: string;
}

export function MealDescription({ meal, description }: MealDescriptionProps) {
    const htmlContent = description && description.length > 0 ? `<p>${description}</p>` : `<p>${meal.description}</p>`;

    return (
        <View style={styles['meal-description']}>
            <Heading level={5}>Opis:</Heading>
            <HTMLView value={htmlContent} stylesheet={styles} />
        </View>
    );
}

const styles = StyleSheet.create({
    'meal-description': {
        marginVertical: 8
    },
    p: {
        lineHeight: 20,
        textAlign: 'justify'
    }
});