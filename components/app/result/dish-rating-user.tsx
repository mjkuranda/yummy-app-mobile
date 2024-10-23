import { useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { DishRatingStars } from '@/components/app/result/dish-rating-stars';
import { InputRange } from '@/components/common/input-range';
import { isLoggedIn } from '@/contexts/user.context';
import { Loader } from '@/components/common/loader';
import { Button } from '@/components/common/button';
import { Alert, StyleSheet, View } from 'react-native';
import { rateDish } from '@/api/api';
import { Heading } from '@/components/common/heading';

const ratingSettings = {
    min: 0,
    max: 5,
    value: 2.5,
    step: 0.5
};

interface DishRatingUserProps {
    onToggleRate: (newRating: boolean) => void;
}

export function DishRatingUser({ onToggleRate }: DishRatingUserProps) {
    const { id } = useLocalSearchParams<{ id: string }>();
    const [userRating, setUserRating] = useState<number>(2.5);
    const [isRating, setIsRating] = useState<boolean>(false);

    const onChange = (value: Array<number>): void => {
        const [newValue] = value;

        setUserRating(newValue);
    };

    const onRate = async () => {
        setIsRating(true);

        try {
            await rateDish({ dishId: id, rating: userRating });

            Alert.alert('Pomyślnie dodano ocenę!');
        } catch (err: unknown) {
            // if (err instanceof ApiError) {
            //     handleApiError(err, router, userContext);
            // }
            // NOTE: Session trouble
            Alert.alert('Wystąpił błąd.');
        } finally {
            onToggleRate(true);
            setIsRating(false);
        }
    };

    return (
        <View style={styles['dish-rating-user']}>
            <Heading level={5} style={{ marginBottom: 4 }}>Twoja ocena:</Heading>
            <DishRatingStars rating={userRating} />
            <InputRange settings={{ ...ratingSettings, value: userRating }} onChange={onChange} />
            <View style={styles['dish-rate-button']}>
                {isLoggedIn() && (isRating ? <Loader size={48} isFlex={false} /> : <Button label={'Oceń'} onClick={onRate} width={100} />)}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    'dish-rating-user': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 16
    },
    'dish-rate-button': {
        display: 'flex',
        justifyContent: 'flex-start'
    }
});