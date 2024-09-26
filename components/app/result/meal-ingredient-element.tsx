import { Image, StyleSheet, Text, View } from 'react-native';
import { mealDetailsImages } from '@/assets/assets';

interface MealIngredientElementProps {
    text: string;
    imageUrl: string;
    contains: boolean | null;
}

export function MealIngredientElement({ text, imageUrl, contains }: MealIngredientElementProps) {
    const { ingYesImage, ingNotImage } = mealDetailsImages;

    return (
        <View style={styles['result-ingredient']} key={text}>
            <Image style={styles['result-ingredient__image']} src={imageUrl} alt={text} />
            <Text style={styles['result-ingredient__text']}>{text}</Text>
            {contains !== null && (contains ? <Image source={ingYesImage} style={styles.icon} /> : <Image source={ingNotImage} style={styles.icon} />)}
        </View>
    );
}

const styles = StyleSheet.create({
    'result-ingredient': {
        flexDirection: 'row'
    },
    'result-ingredient__image': {},
    'result-ingredient__text': {},
    icon: {
        width: 16,
        height: 16,
        marginTop: 2,
        marginLeft: 4
    }
});