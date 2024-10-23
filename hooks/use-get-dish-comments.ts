'use client';

import { DishComment } from '@/types/dish.types';
import { useEffect, useState } from 'react';
import { getDishComments } from '@/api/api';
import { Alert } from 'react-native';

export function useGetDishComments(id: string): { data: DishComment[], isLoading: boolean, refetch: () => void } {
    const [data, setData] = useState<DishComment[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [fetchFlag, setFetchFlag] = useState<boolean>(false);

    const refetch = () => setFetchFlag(!fetchFlag);

    useEffect(() => {
        getDishComments(id)
            .then(data => setData(data))
            .catch(() => Alert.alert('Wystąpił błąd podczas ładowania komentarzy.'))
            .finally(() => setIsLoading(false));
    }, [fetchFlag]);

    return { data, isLoading, refetch };
}