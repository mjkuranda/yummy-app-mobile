import { Image, StyleSheet, Text, View } from 'react-native';

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
            {/*{contains !== null && (contains ? <DoneIcon color="success" /> : <ClearIcon color="error" />)}*/}
        </View>
    );
}

const styles = StyleSheet.create({
    'result-ingredient': {},
    'result-ingredient__image': {},
    'result-ingredient__text': {}
});