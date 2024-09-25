import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { IngredientCategoryType } from '@/types/ingredient-category';
import { categoriesJson, ingredientCategories } from '@/assets/assets';
import { SearchIngredientList } from '@/components/app/search/search-ingredient-list';

interface SearchIngredientCategoryProps {
    category: IngredientCategoryType;
}

export function SearchIngredientCategory({ category }: SearchIngredientCategoryProps) {
    const ingredientData = ingredientCategories[category];

    return (
        <View style={styles.searchIngredientCategory}>
            <Text style={styles.searchIngredientCategory__Title}>{categoriesJson[category].pl}</Text>
            <SearchIngredientList category={category} data={ingredientData} />
        </View>
    );
}

const styles = StyleSheet.create({
    searchIngredientCategory: {
        display: 'flex',
        width: Dimensions.get('window').width - 60,
        marginLeft: 30
    },
    searchIngredientCategory__Title: {
        textAlign: 'center',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        marginTop: 21,
        marginBottom: 13
    }
});