import { DetailedMeal } from '@/types/api.types';
import { StyleSheet, View } from 'react-native';
import { Heading } from '@/components/common/heading';
import RenderHTML from 'react-native-render-html';

interface MealDescriptionProps {
    meal: DetailedMeal;
    description?: string;
}

export function MealDescription({ meal, description }: MealDescriptionProps) {
    const htmlContent = description && description.length > 0 ? description : meal.description;

    return (
        <View style={styles['meal-description']}>
            <Heading level={5}>Opis:</Heading>
            {/*<Text>{description && description.length > 0 ? description : meal.description}</Text>*/}
            <RenderHTML
                // contentWidth={1000} // szerokość kontenera
                source={{ html: htmlContent }} // tutaj przekazujesz swój HTML
            />
        </View>
    );
}

const styles = StyleSheet.create({
    'meal-description': {
        marginVertical: 8
    }
});