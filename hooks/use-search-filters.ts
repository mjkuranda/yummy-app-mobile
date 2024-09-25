import { SearchFilters, SearchQuery } from '@/types/search.types';
import { useLocalSearchParams } from 'expo-router';
import { decodeIngredients } from '@/helpers/query.helper';

export function useSearchFilters(): SearchFilters {
    // @ts-ignore
    const searchParams = useLocalSearchParams<SearchQuery>();

    return {
        originalQuery: `ings=${searchParams.ings}`,
        ings: decodeIngredients(searchParams.ings)
    };
}