import { DetailedMeal, TranslatedIngredient } from '@/types/api.types';
import { StyleSheet, View } from 'react-native';
import { Heading } from '@/components/common/heading';
import { useComparedIngredients } from '@/hooks/use-compared-ingredients';
import { useLocalSearchParams } from 'expo-router';
import { MealIngredientElement } from '@/components/app/result/meal-ingredient-element';

interface MealIngredientsProps {
    meal: DetailedMeal;
    ingredients?: TranslatedIngredient[];
}

export function MealIngredients({ meal, ingredients }: MealIngredientsProps) {
    const { sourceUrl } = useLocalSearchParams<{ sourceUrl: string }>();
    const comparedIngredients = useComparedIngredients(sourceUrl, meal);

    return (
        <View style={styles['meal-ingredients']}>
            <Heading level={5}>Składniki:</Heading>
            <View>
                {ingredients ?
                    ingredients.map((ingredient, idx) => <MealIngredientElement key={idx} text={ingredient.text} imageUrl={ingredient.imageUrl} contains={comparedIngredients && comparedIngredients[idx]} />) :
                    meal.ingredients.map((ingredient, idx) => <MealIngredientElement key={idx} text={`${ingredient.amount} ${ingredient.unit} ${ingredient.name}`} imageUrl={ingredient.imageUrl} contains={comparedIngredients && comparedIngredients[idx]} />)
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    'meal-ingredients': {
        marginVertical: 8
    }
});