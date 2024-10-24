import { DetailedDish, DishRecipeSection, TranslatedIngredient } from '@/types/api.types';
import { Alert, Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Heading } from '@/components/common/heading';
import { ukFlagImage } from '@/assets/assets';
import { DishTypeText } from '@/types/dish.types';
import { DishDescription } from '@/components/app/result/dish-description';
import { DishIngredients } from '@/components/app/result/dish-ingredients';
import { DishRecipe } from '@/components/app/result/dish-recipe';
import { DishRating } from '@/components/app/result/dish-rating';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface DishGeneralProps {
    dish: DetailedDish;
    description?: string;
    ingredients?: TranslatedIngredient[];
    recipe?: DishRecipeSection[];
}

export function DishGeneral({ dish, description, ingredients, recipe }: DishGeneralProps) {
    const onPressFlag = () => Alert.alert('Danie zostało przetłumaczone, więc może zawierać błędy.');

    return (
        <View style={styles['result-details']}>
            <View>
                <Heading level={1} style={styles.title}>{dish.title}</Heading>
                {dish.language !== 'pl' &&
                    <TouchableOpacity onPress={onPressFlag}>
                        <View style={styles.imageContainer}>
                            <Image source={ukFlagImage} width={48} alt="IconsBox: https://www.flaticon.com/free-icons/uk-flag" style={styles.uk} />
                        </View>
                    </TouchableOpacity>
                }
            </View>
            <View>
                <DishRating />
                <Text>Czas wykonania: <MaterialCommunityIcons name="clock-time-four-outline" size={16} />{dish.readyInMinutes} minut</Text>
                <Text>Typ dania: <FontAwesomeIcons name="cutlery" /> {DishTypeText[dish.mealType][dish.type].pl}</Text>
                <Text>Autor: <FontAwesome5Icons name="user-plus" /> {dish.sourceOrAuthor} {dish.provider === 'spoonacular' ? '(poprzez Spoonacular)' : ''}</Text>
            </View>
            <View style={{ marginTop: 8 }}>
                <DishDescription description={description} dish={dish} />
                <DishIngredients ingredients={ingredients} dish={dish} />
                <DishRecipe recipe={recipe} dish={dish} />
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
    uk: {}
});