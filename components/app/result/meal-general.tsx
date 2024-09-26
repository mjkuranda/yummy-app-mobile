import { DetailedMeal, MealRecipeSection, TranslatedIngredient } from '@/types/api.types';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { Heading } from '@/components/common/heading';
import { mealDetailsImages, ukFlagImage } from '@/assets/assets';
import { MealTypeText } from '@/types/meal.types';
import { MealDescription } from '@/components/app/result/meal-description';
import { MealIngredients } from '@/components/app/result/meal-ingredients';
import { MealRecipe } from '@/components/app/result/meal-recipe';
import { MealRating } from '@/components/app/result/meal-rating';

interface MealGeneralProps {
    meal: DetailedMeal;
    description?: string;
    ingredients?: TranslatedIngredient[];
    recipe?: MealRecipeSection[];
}

export function MealGeneral({ meal, description, ingredients, recipe }: MealGeneralProps) {
    const { timeImage, providerImage, authorImage } = mealDetailsImages;

    return (
        <View style={styles['result-details']}>
            <View>
                <Heading level={1} style={styles.title}>{meal.title}</Heading>
                {meal.language !== 'pl' &&
                    <View style={styles.imageContainer}>
                        <Image source={ukFlagImage} width={48} alt="IconsBox: https://www.flaticon.com/free-icons/uk-flag" style={styles.uk} />
                    </View>
                }
            </View>
            <View>
                <MealRating />
                <Text>Czas wykonania: <Image source={timeImage} style={styles.icon} />{meal.readyInMinutes} minut</Text>
                <Text>Typ posiłku: <Image source={providerImage} style={styles.icon} />{MealTypeText[meal.type].pl}</Text>
                <Text>Autor: <Image source={authorImage} style={styles.icon} />{meal.sourceOrAuthor} {meal.provider === 'spoonacular' ? '(poprzez Spoonacular)' : ''}</Text>
            </View>
            <View style={{ marginTop: 8 }}>
                <MealDescription description={description} meal={meal} />
                <MealIngredients ingredients={ingredients} meal={meal} />
                <MealRecipe recipe={recipe} meal={meal} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    'result-details': {
        width: Dimensions.get('window').width - 60,
        margin: 'auto'
    },
    title: {
        textAlign: 'center'
    },
    imageContainer: {
        margin: 'auto'
    },
    uk: {
        marginLeft: 16
    },
    icon: {
        width: 16,
        height: 16
    }
});