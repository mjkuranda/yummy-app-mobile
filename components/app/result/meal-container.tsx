import { View } from 'react-native';
import { DetailedMealWithTranslations } from '@/types/api.types';
import { MealImage } from '@/components/app/result/meal-image';
import { MealGeneral } from '@/components/app/result/meal-general';
import { MealCommentContainer } from '@/components/app/result/meal-comment-container';

interface MealContainerProps {
    complexMealObject: DetailedMealWithTranslations;
}

export function MealContainer({ complexMealObject }: MealContainerProps) {
    const { meal, description, ingredients, recipe } = complexMealObject;

    return (
        <View>
            <MealImage imgUrl={meal.imgUrl} provider={meal.provider} />
            <MealGeneral meal={meal} description={description} ingredients={ingredients} recipe={recipe} />
            <MealCommentContainer />
        </View>
    );
}