import { DetailedMeal } from '@/types/api.types';

export function useComparedIngredients(sourceUrl: string, meal: DetailedMeal): boolean[] | null {
    if (!sourceUrl) {
        return null;
    }

    const ingredients = sourceUrl.substring(13).split(',');

    return meal.ingredients.map(ingredient => ingredients.includes(ingredient.name));
}