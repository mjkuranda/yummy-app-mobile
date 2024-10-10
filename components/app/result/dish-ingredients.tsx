import { DetailedDish, TranslatedIngredient } from '@/types/api.types';
import { StyleSheet, View } from 'react-native';
import { Heading } from '@/components/common/heading';
import { useComparedIngredients } from '@/hooks/use-compared-ingredients';
import { useLocalSearchParams } from 'expo-router';
import { DishIngredientElement } from '@/components/app/result/dish-ingredient-element';

interface DishIngredientsProps {
    dish: DetailedDish;
    ingredients?: TranslatedIngredient[];
}

export function DishIngredients({ dish, ingredients }: DishIngredientsProps) {
    const { sourceUrl } = useLocalSearchParams<{ sourceUrl: string }>();
    const comparedIngredients = useComparedIngredients(sourceUrl, dish);

    return (
        <View style={styles['dish-ingredients']}>
            <Heading level={5}>Składniki:</Heading>
            <View>
                {ingredients ?
                    ingredients.map((ingredient, idx) => <DishIngredientElement key={idx} text={ingredient.text} imageUrl={ingredient.imageUrl} contains={comparedIngredients && comparedIngredients[idx]} />) :
                    dish.ingredients.map((ingredient, idx) => <DishIngredientElement key={idx} text={`${ingredient.amount} ${ingredient.unit} ${ingredient.name}`} imageUrl={ingredient.imageUrl} contains={comparedIngredients && comparedIngredients[idx]} />)
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    'dish-ingredients': {
        marginVertical: 8
    }
});