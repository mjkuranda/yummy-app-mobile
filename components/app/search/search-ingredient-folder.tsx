import { IngredientCategoryType } from '@/types/ingredient-category';
import { StyleSheet, View } from 'react-native';
import { SearchIngredientFolderItem } from '@/components/app/search/search-ingredient-folder-item';

interface SearchIngredientFolderProps {
    category: IngredientCategoryType;
    folded: boolean;
    onChange: () => void;
}

export function SearchIngredientFolder({ category, folded, onChange }: SearchIngredientFolderProps) {
    const ingredientId = `${category}-folding`;

    return (
        <View style={styles['search-ingredient-category__ingredient']} key={ingredientId}>
            <SearchIngredientFolderItem category={category} folded={folded} onChange={onChange} />
        </View>
    );
}

const styles = StyleSheet.create({
    'search-ingredient-category__ingredient': {}
});