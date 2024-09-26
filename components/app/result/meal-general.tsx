import { DetailedMeal, MealRecipeSection, TranslatedIngredient } from '@/types/api.types';
import { Alert, Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Heading } from '@/components/common/heading';
import { mealDetailsImages, ukFlagImage } from '@/assets/assets';
import { MealTypeText } from '@/types/meal.types';
import { MealDescription } from '@/components/app/result/meal-description';
import { MealIngredients } from '@/components/app/result/meal-ingredients';
import { MealRecipe } from '@/components/app/result/meal-recipe';
import { MealRating } from '@/components/app/result/meal-rating';
import { Icon } from '@/components/common/icon';

interface MealGeneralProps {
    meal: DetailedMeal;
    description?: string;
    ingredients?: TranslatedIngredient[];
    recipe?: MealRecipeSection[];
}

export function MealGeneral({ meal, description, ingredients, recipe }: MealGeneralProps) {
    const { timeImage, providerImage, authorImage } = mealDetailsImages;

    const onPressFlag = () => Alert.alert('Posiłek został przetłumaczony, więc może zawierać błędy.');

    return (
        <View style={styles['result-details']}>
            <View>
                <Heading level={1} style={styles.title}>{meal.title}</Heading>
                {meal.language !== 'pl' &&
                    <TouchableOpacity onPress={onPressFlag}>
                        <View style={styles.imageContainer}>
                            <Image source={ukFlagImage} width={48} alt="IconsBox: https://www.flaticon.com/free-icons/uk-flag" style={styles.uk} />
                        </View>
                    </TouchableOpacity>
                }
            </View>
            <View>
                <MealRating />
                <Text>Czas wykonania: <Icon type="time" />{meal.readyInMinutes} minut</Text>
                <Text>Typ posiłku: <Icon type="meal-type" />{MealTypeText[meal.type].pl}</Text>
                <Text>Autor: <Icon type="author" />{meal.sourceOrAuthor} {meal.provider === 'spoonacular' ? '(poprzez Spoonacular)' : ''}</Text>
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
    }
});