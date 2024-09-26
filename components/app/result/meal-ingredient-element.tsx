import { Image, StyleSheet, Text, View } from 'react-native';
import { Icon } from '@/components/common/icon';

interface MealIngredientElementProps {
    text: string;
    imageUrl: string;
    contains: boolean | null;
}

export function MealIngredientElement({ text, imageUrl, contains }: MealIngredientElementProps) {
    return (
        <View style={styles['result-ingredient']} key={text}>
            <Image style={styles['result-ingredient__image']} src={imageUrl} alt={text} />
            <Text style={styles['result-ingredient__text']}>{text}</Text>
            <View style={styles.iconContainer}>
                {contains !== null && (contains ? <Icon type="tick" /> : <Icon type="wrong" />)}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    'result-ingredient': {
        flexDirection: 'row'
    },
    'result-ingredient__image': {},
    'result-ingredient__text': {},
    iconContainer: {
        marginTop: 2,
        marginLeft: 4
    }
});