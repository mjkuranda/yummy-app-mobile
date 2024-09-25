import { IngredientCategoryLabels, IngredientCategoryType } from '@/types/ingredient-category';
import { StyleSheet } from 'react-native';
import React from 'react';
import { SearchIngredientItem } from '@/components/app/search/search-ingredient-item';

interface SearchIngredientItemListProps {
    category: IngredientCategoryType;
    ingredients: IngredientCategoryLabels[];
    queryIngredients: string[];
}

export function SearchIngredientItemList({ category, ingredients, queryIngredients }: SearchIngredientItemListProps) {
    return ingredients.map(ingredient => {
        const defaultChecked = queryIngredients.includes(ingredient.en);

        return <SearchIngredientItem ingredient={ingredient} key={`${category}-${ingredient.en}`} defaultChecked={defaultChecked} />;
    });
}

const styles = StyleSheet.create({
    'search-ingredient-category__ingredient': {}
});