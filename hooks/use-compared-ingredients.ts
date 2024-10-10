import { DetailedDish } from '@/types/api.types';

export function useComparedIngredients(sourceUrl: string, dish: DetailedDish): boolean[] | null {
    if (!sourceUrl) {
        return null;
    }

    const ingredients = sourceUrl.split('=')[1].split(',');

    return dish.ingredients.map(ingredient => ingredients.includes(ingredient.name));
}