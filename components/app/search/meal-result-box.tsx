import { useSearchFilters } from '@/hooks/use-search-filters';
import { Dimensions, StyleSheet, View } from 'react-native';
import { SearchMealResult } from '@/components/app/search/search-meal-result';
import { MealResult } from '@/types/api.types';

export function MealResultBox() {
    // const boxRef = useRef(null);
    const { originalQuery, ings } = useSearchFilters();
    // const { data: meals, isLoading } = useGetMeals(ings);
    const meals: MealResult[] = [
        {
            id: '1',
            missingCount: 1,
            relevance: 0.75,
            title: 'Test',
            type: 'main course',
            provider: 'yummy',
            ingredients: []
        }
    ];
    // const isLoading = false;

    // useEffect(() => {
    //     if (!isLoading && ings.length > 0) {
    //         boxRef?.current?.scrollIntoView();
    //     }
    // }, [meals]);

    // if (!meals && isLoading) {
    //     return <Loader />;
    // }

    return (
        <View style={styles['result-box']}>
            {ings.length > 0 && (meals && meals?.length > 0
                ? meals.map(meal => {
                    return <SearchMealResult meal={meal} key={meal.id} ingredientQuery={originalQuery} />;
                })
                : <View style={styles['result-info']}>Found 0 results.</View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    'result-box': {
        width: Dimensions.get('window').width - 60,
        marginLeft: 30,
        paddingTop: 20
    },
    'result-info': {
        width: Dimensions.get('window').width,
        textAlign: 'center'
    }
});