import { DishProvider } from '@/types/api.types';
import { API_URL } from '@/api/methods';

export function getImageUrlForYummyDishes(provider: DishProvider, imgUrl?: string): string | undefined {
    if (provider === 'spoonacular') {
        return imgUrl;
    }

    return imgUrl ? `${API_URL}/images/dishes/${imgUrl}` : undefined;
}