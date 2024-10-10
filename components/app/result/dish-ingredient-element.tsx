import { Image, StyleSheet, Text, View } from 'react-native';
import { Icon } from '@/components/common/icon';

interface DishIngredientElementProps {
    text: string;
    imageUrl: string;
    contains: boolean | null;
}

export function DishIngredientElement({ text, imageUrl, contains }: DishIngredientElementProps) {
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