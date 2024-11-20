import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { IngredientCategoryLabels } from '@/types/ingredient-category';
import { cooper } from '@/constants/colors';
import { useSearchContext } from '@/contexts/search.context';
import { ingredientImage } from '@/assets/assets';

interface SearchIngredientItemProps {
    ingredient: IngredientCategoryLabels;
    defaultChecked?: boolean;
}

export function SearchIngredientItem({ ingredient, defaultChecked }: SearchIngredientItemProps) {
    const { onAddIngredient, onRemoveIngredient, ingredients } = useSearchContext();
    const [selected, setSelected] = useState<boolean>(Boolean(defaultChecked));

    useEffect(() => {
        if (selected) {
            onAddIngredient(ingredient.en);
        } else {
            onRemoveIngredient(ingredient.en);
        }
    }, [selected]);

    useEffect(() => {
        if (ingredients.size === 0) {
            setSelected(false);
        }
    }, [ingredients.size]);

    const onPress = () => setSelected(!selected);

    return (
        <View style={styles['search-ingredient-category__ingredient']} data-filter="ingredient">
            <TouchableOpacity style={styles.checkbox} onPress={onPress}>
                <View style={[styles.selectCircle, selected && { backgroundColor: cooper }]}></View>
                <View style={styles.imageContainer}>
                    {ingredient.imageUrl
                        ? <Image source={{ uri: `https://img.spoonacular.com/ingredients_250x250/${ingredient.imageUrl}` }}
                            alt="Ingredient image icon"
                            width={24}
                            height={24}
                            borderRadius={50}
                        />
                        : <Image source={ingredientImage}
                            alt="Generic ingredient image icon"
                            style={{ width: 24, height: 24 }}
                            data-a-href="https://www.flaticon.com/free-icons/ingredients"
                            data-a-title="ingredients icons"
                            data-a-text="Ingredients icons created by Flat Icons - Flaticon"
                        />
                    }
                    <Text style={styles.selectText}>{ingredient.pl}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    'search-ingredient-category__ingredient': {},
    checkbox: {
        flexDirection: 'row',
        marginVertical: 4
    },
    selectCircle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: cooper
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginLeft: 4,
        position: 'relative',
        bottom: 2
    },
    selectText: {
        marginLeft: 10
    }
});