import { DetailedMeal } from '@/types/api.types';

export function useComparedIngredients(sourceUrl: string, meal: DetailedMeal): boolean[] | null {
    if (!sourceUrl) {
        return null;
    }

    const ingredients = sourceUrl.split('=')[1].split(',');

    return meal.ingredients.map(ingredient => ingredients.includes(ingredient.name));
}