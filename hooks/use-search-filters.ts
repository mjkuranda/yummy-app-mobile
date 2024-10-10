import { SearchFilters, SearchQuery } from '@/types/search.types';
import { useLocalSearchParams } from 'expo-router';
import { decodeIngredients } from '@/helpers/query.helper';
import { DishType, MealType } from '@/types/dish.types';

export function useSearchFilters(): SearchFilters {
    // @ts-ignore
    const searchParams = useLocalSearchParams<SearchQuery>();

    return {
        originalQuery: `ings=${searchParams.ings}&type=${searchParams.type}&dish=${searchParams.dish}`,
        ings: decodeIngredients(searchParams.ings),
        type: (searchParams.type ?? 'any') as MealType,
        dish: (searchParams.dish ?? 'any') as DishType
    };
}