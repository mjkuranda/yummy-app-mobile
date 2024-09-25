import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { IngredientCategoryLabels } from '@/types/ingredient-category';
import { cooper } from '@/constants/colors';
import { useSearchContext } from '@/contexts/search.context';

interface SearchIngredientItemProps {
    ingredient: IngredientCategoryLabels;
    defaultChecked?: boolean;
}

export function SearchIngredientItem({ ingredient, defaultChecked }: SearchIngredientItemProps) {
    const [selected, setSelected] = useState<boolean>(Boolean(defaultChecked));
    const { onAddIngredient, onRemoveIngredient } = useSearchContext();

    useEffect(() => {
        if (selected) {
            onAddIngredient(ingredient.en);
        } else {
            onRemoveIngredient(ingredient.en);
        }
    }, [selected]);

    const onPress = () => setSelected(!selected);

    return (
        <View style={styles['search-ingredient-category__ingredient']} data-filter="ingredient">
            <TouchableOpacity style={styles.checkbox} onPress={onPress}>
                <View style={[styles.selectCircle, selected && { backgroundColor: cooper }]}></View>
                <Text style={styles.selectText}>{ingredient.pl}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    'search-ingredient-category__ingredient': {},
    checkbox: {
        flexDirection: 'row'
    },
    selectCircle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: cooper
    },
    selectText: {
        marginLeft: 10,
        marginBottom: 10
    }
});