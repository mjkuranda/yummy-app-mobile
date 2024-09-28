import { MealType } from '@/types/meal.types';

export interface SearchFormData {
    ingredients: string[];
}

export interface SearchFilters {
    originalQuery: string;
    ings: string[];
    type: MealType;
}

export interface SearchQuery {
    ings: string;
    type: MealType;
}