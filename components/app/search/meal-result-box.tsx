import { useSearchFilters } from '@/hooks/use-search-filters';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { SearchMealResult } from '@/components/app/search/search-meal-result';
import { useEffect, useState } from 'react';
import { useGetMeals } from '@/api/endpoints';
import { Loader } from '@/components/common/loader';
import { MealResult } from '@/types/api.types';
import { filterMealByType } from '@/helpers/search.helper';

export function MealResultBox() {
    const { originalQuery, ings, type } = useSearchFilters();
    const { meals, isLoading, refetch } = useGetMeals(ings);
    const [filteredMeals, setFilteredMeals] = useState<MealResult[]>([]);

    useEffect(() => {
        refetch();
    }, [ings.join(','), type]);

    useEffect(() => {
        const filtered = filterMealByType(meals ?? [], type);

        setFilteredMeals(filtered);
    }, [meals, type]);

    if (!meals.length && isLoading) {
        return <Loader />;
    }

    return (
        <View style={styles['result-box']}>
            {isLoading
                ? <Loader />
                : ings.length > 0 && (filteredMeals.length > 0
                    ? filteredMeals.map(meal => {
                        return <SearchMealResult meal={meal} key={meal.id} ingredientQuery={originalQuery} />;
                    })
                    : <Text style={styles['result-info']}>Nie znaleziono żadnych dopasowań.</Text>
                )
            }
        </View>
    );
}

const styles = StyleSheet.create({
    'result-box': {
        width: Dimensions.get('window').width - 60,
        marginLeft: 30,
        marginBottom: 30
    },
    'result-info': {
        width: Dimensions.get('window').width - 60,
        textAlign: 'center',
        fontWeight: 'bold',
        fontStyle: 'italic'
    }
});