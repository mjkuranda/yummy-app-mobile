import { DishResult } from '@/types/api.types';
import { ReactElement } from 'react';
import { useHasImage } from '@/hooks/use-has-image';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';
import { honeyYellow } from '@/constants/colors';
import { noPhotoImage } from '@/assets/assets';
import { Loader } from '@/components/common/loader';

interface SearchDishResultProps {
    dish: DishResult;
    ingredientQuery: string;
}

export function SearchDishResult({ dish, ingredientQuery }: SearchDishResultProps) {
    const { hasImage, isLoading } = useHasImage(dish.imgUrl);

    const imageProps = {
        ...(hasImage && { src: dish.imgUrl }),
        ...(!hasImage && { source: noPhotoImage })
    };

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
        return <Text style={{ textAlign: 'center' }}>Zgodność z wyszukiwaniem: <Text style={{ fontWeight: 'bold' }}>{Math.ceil(relevance * 100)}%</Text></Text>;
    };

    return (
        <Link href={{
            pathname: '/result',
            params: {
                id: dish.id,
                sourceUrl: ingredientQuery
            }
        }} style={{ marginVertical: 10 }}>
            <View style={styles['result-container']}>
                {isLoading ? <Loader /> : <Image style={styles['result-image']} {...imageProps} />}
                <View style={styles['result-label']}>
                    <View style={styles['result-description']}>
                        <Text style={styles['result-title']} numberOfLines={3}>
                            {dish.title}
                        </Text>
                        <View style={styles['result-text']}>
                            {renderRelevance(dish.relevance)}
                            {renderMissing(dish.missingCount)}
                        </View>
                    </View>
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
    perfectMatchedText: { color: 'green', fontWeight: 'bold', paddingTop: 10, textAlign: 'center' },
    poorMatchedText: { color: '#cc0000', fontWeight: 'bold', paddingTop: 10, textAlign: 'center' }
});