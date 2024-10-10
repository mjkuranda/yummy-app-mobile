import { DetailedDishWithTranslations, DishProposal, DishResult } from '@/types/api.types';
import { useEffect, useState } from 'react';
import { getDish, getDishes, getDishProposals } from '@/api/api';
import { useRouter } from 'expo-router';

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

export function useGetDishProposals(): {
    proposals: DishProposal[],
    isLoading: boolean,
    onPrevious: () => void,
    onNext: () => void,
    onChoose: () => void,
    getCurrentProposal: () => DishProposal | null
    } {
    const [proposals, setProposals] = useState<DishProposal[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [currentProposalIdx, setCurrentProposalIdx] = useState<number>(0);
    const router = useRouter();

    useEffect(() => {
        getDishProposals()
            .then(data => setProposals(data))
            .finally(() => setIsLoading(false));
    }, []);

    const onPrevious = () => {
        if (currentProposalIdx === 0) {
            setCurrentProposalIdx((proposals?.length ?? 1) - 1);
        } else {
            setCurrentProposalIdx((currentProposalIdx - 1) % (proposals?.length ?? 1));
        }
    };

    const onNext = () => {
        setCurrentProposalIdx((currentProposalIdx + 1) % (proposals?.length ?? 1));
    };

    const onChoose = () => {
        if (proposals) {
            return router.push(`/result?id=${proposals[currentProposalIdx].id}`);
        }

        router.push('/');
    };

    const getCurrentProposal = (): DishProposal | null => {
        if (isLoading || proposals?.length === 0) {
            return null;
        }

        return proposals![currentProposalIdx];
    };

    return { proposals, isLoading, onPrevious, onNext, onChoose, getCurrentProposal };
}