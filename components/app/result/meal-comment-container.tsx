import { useLocalSearchParams } from 'expo-router';
import { Dimensions, StyleSheet, View } from 'react-native';
import { MealComment } from '@/types/meal.types';
import { Heading } from '@/components/common/heading';
import { Loader } from '@/components/common/loader';
import { MealCommentContent } from '@/components/app/result/meal-comment-content';

export function MealCommentContainer() {
    const { id } = useLocalSearchParams<{ id: string }>();
    // const { isLoggedIn } = useUserContext();
    const isLoggedIn = () => false;
    // const { data, isLoading, refetch } = useGetMealComments(id);
    const data: MealComment[] = [];
    const isLoading = false;
    const refetch = () => {};

    return (
        <View style={styles['meal-comment-container']}>
            {!isLoading && data
                ? (
                    <View style={styles['meal-comment-content']}>
                        <Heading level={3} style={styles['meal-comment-header']}>Komentarze</Heading>
                        {/*{isLoggedIn()*/}
                        {/*    ? <MealCommentAddSection refetch={refetch} />*/}
                        {/*    : <Text style={{ textAlign: 'center' }}><Link href={'/users/login'}>Zaloguj się</Link>, aby dodać komentarz.</Text>*/}
                        {/*}*/}
                        <MealCommentContent data={data} />
                    </View>
                )
                : <Loader />
            }
        </View>
    );
}

const styles = StyleSheet.create({
    'meal-comment-container': {
        width: Dimensions.get('window').width - 60,
        marginHorizontal: 'auto',
        marginVertical: 16
    },
    'meal-comment-content': {},
    'meal-comment-header': {
        textAlign: 'center'
    }
});