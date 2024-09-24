import { IngredientCategoryLabels, IngredientCategoryType } from '@/types/ingredient-category';
import { StyleSheet, Text, View } from 'react-native';

interface SearchIngredientItemListProps {
    category: IngredientCategoryType;
    ingredients: IngredientCategoryLabels[];
    queryIngredients: string[];
}

export function SearchIngredientItemList({ category, ingredients, queryIngredients }: SearchIngredientItemListProps) {
    return ingredients.map(ingredient => {
        const ingredientId = `ingredient:${ingredient.en}:category:${category}`;
        const defaultChecked = queryIngredients.includes(ingredient.en);

        return (
            <View style={styles['search-ingredient-category__ingredient']} key={`${category}-${ingredient.en}`} data-filter="ingredient">
                {/*<input type="checkbox" name={ingredientId} id={ingredientId} className="d-none" defaultChecked={defaultChecked} />*/}
                {/*<label htmlFor={ingredientId}>{ingredient.pl}</label>*/}
                <Text>{ingredientId} {defaultChecked}</Text>
            </View>
        );
    });
}

const styles = StyleSheet.create({
    'search-ingredient-category__ingredient': {}
});