import { DetailedMeal } from '@/types/api.types';
import { StyleSheet, Text, View } from 'react-native';
import { Heading } from '@/components/common/heading';

interface MealDescriptionProps {
    meal: DetailedMeal;
    description?: string;
}

export function MealDescription({ meal, description }: MealDescriptionProps) {
    return (
        <View style={styles['meal-description']}>
            <Heading level={5}>Opis:</Heading>
            <Text>{description && description.length > 0 ? description : meal.description}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    'meal-description': {
        marginVertical: 8
    }
});