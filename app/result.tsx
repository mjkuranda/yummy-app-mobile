import { useLocalSearchParams } from 'expo-router';
import { DetailedDishWithTranslations } from '@/types/api.types';
import { Header } from '@/components/common/header';
import { Footer } from '@/components/common/footer';
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native';
import { Loader } from '@/components/common/loader';
import { DishContainer } from '@/components/app/result/dish-container';
import { orangeYellowCrayola } from '@/constants/colors';
import { useGetDishById } from '@/api/endpoints';

export default function ResultById() {
    const { id } = useLocalSearchParams();
    const { dish, isLoading } = useGetDishById(id as string);

    return (
        <ScrollView>
            <Header />
            <View style={styles['result-page']}>
                <View style={styles['result-container']}>
                    {isLoading
                        ? (
                            <View style={styles.loaderContainer}>
                                <Loader />
                            </View>
                        )
                        : <DishContainer complexDishObject={dish as DetailedDishWithTranslations} />
                    }
                    {!isLoading && !dish && <View>Posiłek nie został znaleziony.</View>}
                </View>
            </View>
            <Footer />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    'result-page': {
        backgroundColor: orangeYellowCrayola
    },
    'result-container': {},
    loaderContainer: {
        height: Dimensions.get('window').height - 320
    }
});