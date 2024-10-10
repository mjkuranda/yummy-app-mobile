import { useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DishRating as DishRatingType } from '@/types/dish.types';
import { DishRatingStars } from '@/components/app/result/dish-rating-stars';
import { constantStyles } from '@/constants/styles';

export function DishRating() {
    const { id } = useLocalSearchParams<{ id: string }>();
    // const { isLoggedIn } = useUserContext();
    const isLoggedIn = () => false;
    const [toggleRate, setToggleRate] = useState<boolean>(false);
    const [rating, setRating] = useState<DishRatingType>({ dishId: id, rating: 0, count: 0 });

    // useEffect(() => {
    //     getMealRating(id)
    //         .then(mealRating => setRating(mealRating));
    // }, []);

    const onToggleRate = (newRate: boolean) => {
        setToggleRate(!toggleRate);

        // if (newRate) {
        //     getMealRating(id)
        //         .then(mealRating => setRating(mealRating));
        // }
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
                {/*{isLoggedIn() && <TextButton label={'Oceń'} onClick={onToggleRate} />}*/}
            </View>
            {/*{toggleRate && <MealRatingUser onToggleRate={onToggleRate} />}*/}
        </View>
    );
}

const styles = StyleSheet.create({
    'dish-rating': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    'dish-rating__rating': {
        ...constantStyles.flexCenter,
        flexDirection: 'column',
        marginBottom: 8
    },
    'rate-count': {}
});