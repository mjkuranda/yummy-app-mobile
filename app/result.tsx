import { useLocalSearchParams } from 'expo-router';
import { DetailedMealWithTranslations } from '@/types/api.types';
import { Header } from '@/components/common/header';
import { Footer } from '@/components/common/footer';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Loader } from '@/components/common/loader';
import { MealContainer } from '@/components/app/result/meal-container';
import { orangeYellowCrayola } from '@/constants/colors';
import { useGetMealById } from '@/api/endpoints';

export default function ResultById() {
    const { id, sourceUrl } = useLocalSearchParams();
    const { meal, isLoading } = useGetMealById(id as string);

    return (
        <ScrollView>
            <Header />
            <View style={styles['result-page']}>
                <View style={styles['result-container']}>
                    {isLoading
                        ? <Loader />
                        : <MealContainer complexMealObject={meal as DetailedMealWithTranslations} />
                    }
                    {!isLoading && !meal && <View>Posiłek nie został znaleziony.</View>}
                </View>
            </View>
            <Footer />
        </ScrollView>
    );
}

function isApiError(meal: DetailedMealWithTranslations | undefined): boolean {
    return (meal as any)?.statusCode !== undefined;
}

const styles = StyleSheet.create({
    'result-page': {
        backgroundColor: orangeYellowCrayola
    },
    'result-container': {}
});