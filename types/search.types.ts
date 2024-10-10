import { DishType, MealType } from '@/types/dish.types';

export interface SearchFormData {
    ingredients: string[];
}

export interface SearchFilters {
    originalQuery: string;
    ings: string[];
    type: MealType;
    dish: DishType;
}

export interface SearchQuery {
    ings: string;
    type: MealType;
    dish: DishType;
}