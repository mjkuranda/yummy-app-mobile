import { View } from 'react-native';
import { DetailedDishWithTranslations } from '@/types/api.types';
import { DishImage } from '@/components/app/result/dish-image';
import { DishGeneral } from '@/components/app/result/dish-general';
import { DishCommentContainer } from '@/components/app/result/dish-comment-container';

interface DishContainerProps {
    complexDishObject: DetailedDishWithTranslations;
}

export function DishContainer({ complexDishObject }: DishContainerProps) {
    const { dish, description, ingredients, recipe } = complexDishObject;

    return (
        <View>
            <DishImage imgUrl={dish.imgUrl} provider={dish.provider} />
            <DishGeneral dish={dish} description={description} ingredients={ingredients} recipe={recipe} />
            <DishCommentContainer />
        </View>
    );
}