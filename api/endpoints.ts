import { DetailedDishWithTranslations, DishResult } from '@/types/api.types';
import { useEffect, useState } from 'react';
import { getDish, getDishes } from '@/api/api';

export function useGetDishes(ings: string[]): { dishes: DishResult[], isLoading: boolean, refetch: () => void } {
    const [dishes, setDishes] = useState<DishResult[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [refetchFlag, setRefetchFlag] = useState<boolean>(false);

    const refetch = () => {
        setRefetchFlag(!refetchFlag);
        setIsLoading(true);
    };

    useEffect(() => {
        getDishes(ings)
            .then(data => setDishes(data))
            .finally(() => setIsLoading(false));
    }, [refetchFlag]);

    return { dishes, isLoading, refetch };
}

export function useGetDishById(id: string): { dish?: DetailedDishWithTranslations, isLoading: boolean } {
    const [dish, setDish] = useState<DetailedDishWithTranslations>();
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        getDish(id)
            .then(data => setDish(data))
            .finally(() => setIsLoading(false));
    }, []);

    return { dish, isLoading };
}