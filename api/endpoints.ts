import { DetailedMealWithTranslations, MealResult } from '@/types/api.types';
import { useEffect, useState } from 'react';
import { getMeal, getMeals } from '@/api/api';

export function useGetMeals(ings: string[]): { meals: MealResult[], isLoading: boolean, refetch: () => void } {
    const [meals, setMeals] = useState<MealResult[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [refetchFlag, setRefetchFlag] = useState<boolean>(false);

    const refetch = () => {
        setRefetchFlag(!refetchFlag);
        setIsLoading(true);
    };

    useEffect(() => {
        getMeals(ings)
            .then(data => setMeals(data))
            .finally(() => setIsLoading(false));
    }, [refetchFlag]);

    return { meals, isLoading, refetch };
}

export function useGetMealById(id: string): { meal?: DetailedMealWithTranslations, isLoading: boolean } {
    const [meal, setMeal] = useState<DetailedMealWithTranslations>();
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        getMeal(id)
            .then(data => setMeal(data))
            .finally(() => setIsLoading(false));
    }, []);

    return { meal, isLoading };
}