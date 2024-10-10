import { useLocalSearchParams } from 'expo-router';
import { Dimensions, StyleSheet, View } from 'react-native';
import { DishComment } from '@/types/dish.types';
import { Heading } from '@/components/common/heading';
import { Loader } from '@/components/common/loader';
import { DishCommentContent } from '@/components/app/result/dish-comment-content';

export function DishCommentContainer() {
    const { id } = useLocalSearchParams<{ id: string }>();
    // const { isLoggedIn } = useUserContext();
    const isLoggedIn = () => false;
    // const { data, isLoading, refetch } = useGetMealComments(id);
    const data: DishComment[] = [];
    const isLoading = false;
    const refetch = () => {};

    return (
        <View style={styles['dish-comment-container']}>
            {!isLoading && data
                ? (
                    <View style={styles['dish-comment-content']}>
                        <Heading level={3} style={styles['dish-comment-header']}>Komentarze</Heading>
                        {/*{isLoggedIn()*/}
                        {/*    ? <MealCommentAddSection refetch={refetch} />*/}
                        {/*    : <Text style={{ textAlign: 'center' }}><Link href={'/users/login'}>Zaloguj się</Link>, aby dodać komentarz.</Text>*/}
                        {/*}*/}
                        <DishCommentContent data={data} />
                    </View>
                )
                : <Loader />
            }
        </View>
    );
}

const styles = StyleSheet.create({
    'dish-comment-container': {
        width: Dimensions.get('window').width - 60,
        marginHorizontal: 'auto',
        marginVertical: 16
    },
    'dish-comment-content': {},
    'dish-comment-header': {
        textAlign: 'center'
    }
});