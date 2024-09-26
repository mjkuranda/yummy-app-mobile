import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect } from 'react';
import { DetailedMealWithTranslations } from '@/types/api.types';
import { Header } from '@/components/common/header';
import { Footer } from '@/components/common/footer';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Loader } from '@/components/common/loader';
import { MealContainer } from '@/components/app/result/meal-container';
import { orangeYellowCrayola } from '@/constants/colors';

export default function ResultById() {
    const { id, sourceUrl } = useLocalSearchParams();
    const router = useRouter();
    // const { data: meal, isLoading, isError, error } = useGetMealById(id as string);
    const meal: DetailedMealWithTranslations = {
        meal: {
            id: '1',
            provider: 'yummy',
            ingredients: [
                {
                    name: 'honey',
                    unit: 'jars',
                    amount: 2,
                    imageUrl: ''
                }
            ],
            language: 'pl',
            sourceOrAuthor: 'marek',
            type: 'main course',
            title: 'Test',
            readyInMinutes: 50,
            description: 'To jest opis',
            recipeSections: []
        }
    };
    const isLoading = false;
    const isError = false;
    const error = { message: '' };

    useEffect(() => {
        if (isError && error.message.includes('was not confirmed by admin')) {
            // toastError('Ten posiłek nie został jeszcze zatwierdzony przez administrację.');
            router.push('/search');
        }

        if (isApiError(meal)) {
            // toastError('Error occurred while fetching this meal.');
            router.push('/search');
        }

        if (isError) {
            // toastError('Error occurred while fetching this meal.');
            router.push('/search');
        }
    }, [meal, isError]);

    return (
        <ScrollView>
            <Header />
            <View style={styles['result-page']}>
                <View style={styles['result-container']}>
                    {isLoading || isError
                        ? <Loader />
                        : <MealContainer complexMealObject={meal as DetailedMealWithTranslations} />
                    }
                    {!isLoading && !meal && <div>Posiłek nie został znaleziony.</div>}
                    {isError && <div>Wystąpił błąd.</div>}
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