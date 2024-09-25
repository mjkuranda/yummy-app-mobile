import { useMemo, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { IngredientCategoryData, IngredientCategoryType } from '@/types/ingredient-category';
import { SearchIngredientItemList } from '@/components/app/search/search-ingredient-item-list';
import { SearchIngredientFolder } from '@/components/app/search/search-ingredient-folder';
import { useSearchFilters } from '@/hooks/use-search-filters';

interface SearchIngredientListProps {
    category: IngredientCategoryType;
    data: IngredientCategoryData;
}

export function SearchIngredientList({ category, data }: SearchIngredientListProps) {
    const [folded, setFolded] = useState<boolean>(true);
    const labels = useMemo(() => Object.entries(data).map(el => el[1]).sort((a, b) => a.pl.localeCompare(b.pl)), [data]);
    const ingredients = folded ? labels.filter((el, idx) => idx < 10) : [...labels];
    const { ings: queryIngredients } = useSearchFilters();

    const onChange = () => setFolded(!folded);

    return (
        <ScrollView style={styles.searchIngredientCategory__list}>
            <SearchIngredientItemList category={category} ingredients={ingredients} queryIngredients={queryIngredients} />
            {labels.length > 10 && <SearchIngredientFolder category={category} folded={folded} onChange={onChange} />}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    searchIngredientCategory__list: {}
});