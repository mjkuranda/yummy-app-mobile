import { useEffect, useState } from 'react';
import { mealDetailsImages } from '@/assets/assets';
import { Image, StyleSheet, View } from 'react-native';

const { starFullImage, starHalfImage, starEmptyImage } = mealDetailsImages;

interface MealRatingStarsProps {
    rating: number;
}

interface StartState {
    solid: number;
    half: 0 | 1;
    rest: number;
}

export function MealRatingStars({ rating }: MealRatingStarsProps) {
    const [starState, setStarState] = useState<StartState>({
        solid: 2,
        half: 1,
        rest: 2
    });

    useEffect(() => {
        const solid = Math.floor(rating) + (rating - Math.floor(rating) >= 0.85 ? 1 : 0);
        const half = rating - solid > 0.25 && rating - solid < 0.85 ? 1 : 0;
        const rest = 5 - solid - half;

        setStarState({ solid, half, rest });
    }, [rating]);

    const renderSolid = (starState: StartState) => {
        return Array.from({ length: starState.solid }).map((_, index) => (
            <StarIcon key={`solid-${index}`} />
        ));
    };

    const renderHalf = (starState: StartState) => starState.half === 1 ? <StarHalfIcon /> : null;

    const renderRest = (starState: StartState) => {
        return Array.from({ length: starState.rest }).map((_, index) => (
            <StarBorderIcon key={`rest-${index}`} />
        ));
    };

    if (rating >= 4.85) {
        return (
            <View style={styles['meal-rating-stars']}>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
            </View>
        );
    }

    return (
        <View style={styles['meal-rating-stars']}>
            {renderSolid(starState)}
            {renderHalf(starState)}
            {renderRest(starState)}
        </View>
    );
}

const styles = StyleSheet.create({
    'meal-rating-stars': {
        flexDirection: 'row'
    },
    icon: {
        width: 32,
        height: 32
    }
});

function StarIcon() {
    return <Image source={starFullImage} style={styles.icon} />;
}

function StarHalfIcon() {
    return <Image source={starHalfImage} style={styles.icon} />;
}

function StarBorderIcon() {
    return <Image source={starEmptyImage} style={styles.icon} />;
}