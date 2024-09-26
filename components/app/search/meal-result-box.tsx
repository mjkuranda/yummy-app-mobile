import { useSearchFilters } from '@/hooks/use-search-filters';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { SearchMealResult } from '@/components/app/search/search-meal-result';
import { useEffect } from 'react';
import { useGetMeals } from '@/api/endpoints';
import { Loader } from '@/components/common/loader';

export function MealResultBox() {
    const { originalQuery, ings } = useSearchFilters();
    const { meals, isLoading, refetch } = useGetMeals(ings);

    useEffect(() => {
        refetch();
    }, [ings.join(',')]);

    if (!meals.length && isLoading) {
        return <Loader />;
    }

    return (
        <View style={styles['result-box']}>
            {isLoading
                ? <Loader />
                : ings.length > 0 && (meals && meals?.length > 0
                    ? meals.map(meal => {
                        return <SearchMealResult meal={meal} key={meal.id} ingredientQuery={originalQuery} />;
                    })
                    : <Text style={styles['result-info']}>Found 0 results.</Text>
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
        width: Dimensions.get('window').width,
        textAlign: 'center'
    }
});