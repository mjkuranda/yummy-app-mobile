import { DetailedDish, DishRecipeSection } from '@/types/api.types';
import { StyleSheet, Text, View } from 'react-native';
import { Heading } from '@/components/common/heading';

interface DishRecipeProps {
    dish: DetailedDish;
    recipe?: DishRecipeSection[];
}

export function DishRecipe({ recipe }: DishRecipeProps) {
    if (!recipe || recipe.length === 0) {
        return (
            <View style={styles['instruction-section']}>
                <Heading level={5}>Przepis:</Heading>
                <Text>Niesety, autor nie dostarczył żadnego przepisu dla tego posiłku.</Text>
            </View>
        );
    }

    return (
        <View>
            {recipe && recipe.map(section => {
                return (
                    <View style={styles['instruction-section']} key={section.name}>
                        <Heading level={5}>Przepis{section.name ? `na ${section.name}` : ''}:</Heading>
                        <View>
                            {section.steps.map((step, idx) => {
                                // NOTE: Index is okay, because it's a static list
                                return (
                                    <View style={styles.stepContainer} key={`${section.name}-${idx}`}>
                                        <Text style={{ fontWeight: 'bold' }}>{idx + 1}.</Text>
                                        <Text style={{ marginLeft: 4, textAlign: 'justify' }}>{step}</Text>
                                    </View>
                                );
                            })}
                        </View>
                    </View>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    'instruction-section': {
        marginVertical: 8
    },
    stepContainer: {
        flexDirection: 'row'
    }
});