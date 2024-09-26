import { MealProvider } from '@/types/api.types';
import { API_URL } from '@/api/methods';

export function getImageUrlForYummyMeals(provider: MealProvider, imgUrl?: string): string | undefined {
    if (provider === 'spoonacular') {
        return imgUrl;
    }

    return imgUrl ? `${API_URL}/images/meals/${imgUrl}` : undefined;
}