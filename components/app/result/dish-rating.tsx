import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DishRating as DishRatingType } from '@/types/dish.types';
import { DishRatingStars } from '@/components/app/result/dish-rating-stars';
import { constantStyles } from '@/constants/styles';
import { isLoggedIn } from '@/contexts/user.context';
import { DishRatingUser } from '@/components/app/result/dish-rating-user';
import { TextButton } from '@/components/common/text-button';
import { getDishRating } from '@/api/api';

export function DishRating() {
    const { id } = useLocalSearchParams<{ id: string }>();
    const [toggleRate, setToggleRate] = useState<boolean>(false);
    const [rating, setRating] = useState<DishRatingType>({ dishId: id, rating: 0, count: 0 });

    useEffect(() => {
        getDishRating(id)
            .then(dishRating => setRating(dishRating));
    }, []);

    const onToggleRate = (newRate: boolean) => {
        setToggleRate(!toggleRate);

        if (newRate) {
            getDishRating(id)
                .then(dishRating => setRating(dishRating));
        }
    };

    const renderRatingCountText = (count: number): string => {
        if (count === 0) {
            return 'Brak ocen';
        }

        if (count === 1) {
            return '1 ocena';
        }

        if (count < 5) {
            return `${count} oceny`;
        }

        return `${count} ocen`;
    };

    return (
        <View style={styles['dish-rating']}>
            <View style={styles['dish-rating__rating']}>
                <DishRatingStars rating={rating.rating} />
                <Text style={styles['rate-count']}>({renderRatingCountText(rating.count)})</Text>
                {isLoggedIn() && <TextButton label={toggleRate ? 'Zakończ' : 'Oceń'} onClick={onToggleRate} />}
            </View>
            {toggleRate && <DishRatingUser onToggleRate={onToggleRate} />}
        </View>
    );
}

const styles = StyleSheet.create({
    'dish-rating': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    'dish-rating__rating': {
        ...constantStyles.flexCenter,
        flexDirection: 'column',
        marginBottom: 8
    },
    'rate-count': {}
});