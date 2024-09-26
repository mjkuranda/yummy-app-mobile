import { DetailedMeal, MealRecipeSection } from '@/types/api.types';
import { StyleSheet, Text, View } from 'react-native';
import { Heading } from '@/components/common/heading';

interface MealRecipeProps {
    meal: DetailedMeal;
    recipe?: MealRecipeSection[];
}

export function MealRecipe({ recipe }: MealRecipeProps) {
    if (!recipe || recipe.length === 0) {
        return (
            <View style={styles['instruction-section']}>
                <Heading level={5}>Przepis:</Heading>
                <Text>Niesety, autor nie dostarczył żadnego przepisu dla tego posiłku.</Text>
            </View>
        );
    }

    return (
        <div>
            {recipe && recipe.map(section => {
                return (
                    <View style={styles['instruction-section']}>
                        <Heading level={5}>Przepis{section.name ? `na ${section.name}` : ''}:</Heading>
                        <View>
                            {section.steps.map((step, idx) => {
                                // NOTE: Index is okay, because it's a static list
                                return (
                                    <Text key={idx}>{step}</Text>
                                );
                            })}
                        </View>
                    </View>
                );
            })}
        </div>
    );
}

const styles = StyleSheet.create({
    'instruction-section': {}
});