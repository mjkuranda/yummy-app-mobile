import { useSearchFilters } from '@/hooks/use-search-filters';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { SearchDishResult } from '@/components/app/search/search-dish-result';
import { useEffect, useState } from 'react';
import { useGetDishes } from '@/api/endpoints';
import { Loader } from '@/components/common/loader';
import { DishResult } from '@/types/api.types';
import { filterDishByType } from '@/helpers/search.helper';

export function DishResultBox() {
    const { originalQuery, ings, type, dish } = useSearchFilters();
    const { dishes, isLoading, refetch } = useGetDishes(ings);
    const [filteredDishes, setFilteredDishes] = useState<DishResult[]>([]);

    useEffect(() => {
        refetch();
    }, [ings.join(','), type]);

    useEffect(() => {
        const filtered = filterDishByType(dishes ?? [], type, dish);

        setFilteredDishes(filtered);
    }, [dishes, type, dish]);

    if (!dishes.length && isLoading) {
        return <Loader />;
    }

    return (
        <View style={styles['result-box']}>
            {isLoading
                ? <Loader />
                : ings.length > 0 && (filteredDishes.length > 0
                    ? filteredDishes.map(dish => {
                        return <SearchDishResult dish={dish} key={dish.id} ingredientQuery={originalQuery} />;
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