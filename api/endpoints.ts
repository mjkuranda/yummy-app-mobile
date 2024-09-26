import { MealResult } from '@/types/api.types';
import { useEffect, useState } from 'react';
import { getMeals } from '@/api/api';

export function useGetMeals(ings: string[]): MealResult[] {
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