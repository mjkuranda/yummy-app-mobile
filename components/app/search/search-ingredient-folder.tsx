import { IngredientCategoryType } from '@/types/ingredient-category';
import { StyleSheet, Text, View } from 'react-native';

interface SearchIngredientFolderProps {
    category: IngredientCategoryType;
    onChange: () => void;
}

export function SearchIngredientFolder({ category, onChange }: SearchIngredientFolderProps) {
    const ingredientId = `${category}-folding`;

    return (
        <View style={styles['search-ingredient-category__ingredient']} key={ingredientId}>
            {/*<input type="checkbox" name={ingredientId} id={ingredientId} className="d-none" onChange={onChange} />*/}
            {/*<label htmlFor={ingredientId}>Fold/Unfold</label>*/}
            <Text>ingredientId</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    'search-ingredient-category__ingredient': {}
});