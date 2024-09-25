import { MealResult } from '@/types/api.types';
import { ReactElement } from 'react';
import { useHasImage } from '@/hooks/use-has-image';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { constantStyles } from '@/constants/styles';
import { Link } from 'expo-router';
import { honeyYellow } from '@/constants/colors';

interface SearchMealResultProps {
    meal: MealResult;
    ingredientQuery: string;
}

export function SearchMealResult({ meal, ingredientQuery }: SearchMealResultProps) {
    const { hasImage, isLoading } = useHasImage(meal.imgUrl);
    const imgSrc = hasImage ? meal.imgUrl : '/no-image.png';
    // const encodedUri = encodeURI(`/search?${ingredientQuery}`);

    const renderMissing = (missingCount: number): ReactElement => {
        if (missingCount === 0) {
            return <Text style={styles.perfectMatchedText}>Idealnie pasujące</Text>;
        }

        if (missingCount === 1) {
            return <Text style={styles.poorMatchedText}>1 brakujący składnik</Text>;
        }

        if (missingCount < 5) {
            return <Text style={styles.poorMatchedText}>{missingCount} brakujące składniki</Text>;
        }

        return <Text style={styles.poorMatchedText}>{missingCount} brakujących składników</Text>;
    };

    const renderRelevance = (relevance: number): ReactElement => {
        return <Text>Zgodność z Twoim wyszukiwaniem: <Text style={{ fontWeight: 'bold' }}>{Math.ceil(relevance * 100)}%</Text></Text>;
    };

    return (
        <Link href={{
            pathname: '/result',
            params: {
                id: meal.id,
                sourceUrl: ingredientQuery
            }
        }}>
            <View style={styles['result-container']}>
                <View style={styles['result-image']}>
                    {/*<Link style={styles['img-link']} href={`/result/${meal.id}?sourceUrl=${ingredientQuery}`} target="_blank">*/}
                    {/*    {isLoading ? <Loader /> : <img src={imgSrc} alt={`Zdjęcie posiłku o nazwie ${meal.title}`} />}*/}
                    {/*</Link>*/}
                </View>
                <View style={styles['result-label']}>
                    <View style={styles['result-description']}>
                        <Text style={styles['result-title']}>{meal.title}</Text>
                        <View style={styles['result-text']}>
                            {renderRelevance(meal.relevance)}
                            {renderMissing(meal.missingCount)}
                        </View>
                    </View>
                    {/*<View style={styles['result-button']}>*/}
                    {/*    <Button label={'Zobacz'} width={totalWidth * 0.618} />*/}
                    {/*</View>*/}
                </View>
            </View>
        </Link>
    );
}

const totalWidth = Dimensions.get('window').width - 60;
const totalHeight = totalWidth * 0.618;

const styles = StyleSheet.create({
    'result-container': {
        width: totalWidth,
        height: totalHeight,
        backgroundColor: honeyYellow,
        flexDirection: 'row'
    },
    'result-image': {
        display: 'flex',
        width: totalWidth * 0.618,
        height: totalHeight
    },
    'img-link': {},
    'result-label': {
        display: 'flex',
        width: totalWidth * 0.382,
        height: totalHeight
    },
    'result-description': {},
    'result-title': {
        paddingVertical: 10,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    'result-text': {},
    'result-button': {
        ...constantStyles.flexCenter
    },
    perfectMatchedText: { color: 'green', fontWeight: 'bold', paddingTop: 10 },
    poorMatchedText: { color: '#cc0000', fontWeight: 'bold', paddingTop: 10 }
});