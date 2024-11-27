import { DetailedDish } from '@/types/api.types';
import pantryIngredients from '@/assets/data/ingredients/pantry.json';

export function useComparedIngredients(sourceUrl: string, dish: DetailedDish): boolean[] | null {
    if (!sourceUrl) {
        return null;
    }

    const ingredients = [...sourceUrl.split('=')[1].split(','), ...pantryIngredients];

    return dish.ingredients.map(ingredient => ingredients.includes(ingredient.name));
}