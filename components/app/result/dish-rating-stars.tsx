import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface DishRatingStarsProps {
    rating: number;
}

interface StartState {
    solid: number;
    half: 0 | 1;
    rest: number;
}

export function DishRatingStars({ rating }: DishRatingStarsProps) {
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
            <View style={styles['dish-rating-stars']}>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
            </View>
        );
    }

    return (
        <View style={styles['dish-rating-stars']}>
            {renderSolid(starState)}
            {renderHalf(starState)}
            {renderRest(starState)}
        </View>
    );
}

const styles = StyleSheet.create({
    'dish-rating-stars': {
        flexDirection: 'row'
    }
});

const starSize = 24;

function StarIcon() {
    return <Icon name="star" color="yellow" size={starSize} />;
}

function StarHalfIcon() {
    return <Icon name="star-half" color="yellow" size={starSize} />;
}

function StarBorderIcon() {
    return <Icon name="star-border" color="yellow" size={starSize} />;
}