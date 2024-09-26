import { DetailedMeal, MealRecipeSection, TranslatedIngredient } from '@/types/api.types';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Heading } from '@/components/common/heading';
import { ukFlagImage } from '@/assets/assets';
import { MealTypeText } from '@/types/meal.types';
import { MealDescription } from '@/components/app/result/meal-description';
import { MealIngredients } from '@/components/app/result/meal-ingredients';
import { MealRecipe } from '@/components/app/result/meal-recipe';

interface MealGeneralProps {
    meal: DetailedMeal;
    description?: string;
    ingredients?: TranslatedIngredient[];
    recipe?: MealRecipeSection[];
}

export function MealGeneral({ meal, description, ingredients, recipe }: MealGeneralProps) {
    return (
        <View style={styles['result-details']}>
            <View>
                <Heading level={1} style={styles.title}>{meal.title}</Heading>
                {meal.language !== 'pl' &&
                    <Image source={ukFlagImage} width={48} alt="IconsBox: https://www.flaticon.com/free-icons/uk-flag" style={styles.uk} />
                }
            </View>
            <View>
                <Text>Czas wykonania: {meal.readyInMinutes} minut</Text>
                <Text>Typ posiłku: {MealTypeText[meal.type].pl}</Text>
                <Text>Autor: {meal.sourceOrAuthor} {meal.provider === 'spoonacular' ? '(poprzez Spoonacular)' : ''}</Text>
            </View>
            <View>
                <MealDescription description={description} meal={meal} />
                <MealIngredients ingredients={ingredients} meal={meal} />
                <MealRecipe recipe={recipe} meal={meal} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    'result-details': {},
    title: {
        textAlign: 'center'
    },
    uk: {
        marginLeft: 16
    }
});