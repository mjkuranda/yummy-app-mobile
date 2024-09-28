import { MealResult } from '@/types/api.types';
import { MealType } from '@/types/meal.types';

export function filterMealByType(meals: MealResult[], type: MealType): MealResult[] {
    if (!type || type === 'any') {
        return meals;
    }

    return meals.filter(meal => meal.type === type);
}