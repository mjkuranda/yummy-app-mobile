import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { IngredientCategoryType } from '@/types/ingredient-category';
import { cooper } from '@/constants/colors';

interface SearchIngredientFolderItemProps {
    category: IngredientCategoryType;
    folded: boolean;
    onChange: () => void;
}

export function SearchIngredientFolderItem({ category, folded, onChange }: SearchIngredientFolderItemProps) {
    return (
        <View style={styles['search-ingredient-category__ingredient']} data-filter="ingredient">
            <TouchableOpacity style={styles.checkbox} onPress={onChange}>
                <View style={[styles.selectCircle, !folded && { backgroundColor: cooper }]}></View>
                <Text style={styles.selectText}>{folded ? 'Rozwiń' : 'Zwiń'}</Text>
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
        fontWeight: 'bold',
        marginLeft: 10,
        marginBottom: 10
    }
});