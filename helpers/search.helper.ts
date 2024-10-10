import { DishResult } from '@/types/api.types';
import { DishType, MealType } from '@/types/dish.types';

export function filterDishByType(dishes: DishResult[], type: MealType, dishType: DishType): DishResult[] {
    const filtered = dishes.filter(dish => {
        if (dish.provider !== 'yummy') {
            return true;
        }

        return dish.type === type;
    });

    if (dishType === 'any') {
        return filtered;
    }

    return filtered.filter(dish => dish.type === dishType);
}