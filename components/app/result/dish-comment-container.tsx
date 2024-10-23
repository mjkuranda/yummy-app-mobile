import { Link, useLocalSearchParams } from 'expo-router';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { Heading } from '@/components/common/heading';
import { Loader } from '@/components/common/loader';
import { DishCommentContent } from '@/components/app/result/dish-comment-content';
import { isLoggedIn } from '@/contexts/user.context';
import { DishCommentAddSection } from '@/components/app/result/dish-comment-add-section';
import { spanishBlue } from '@/constants/colors';
import { useGetDishComments } from '@/hooks/use-get-dish-comments';

export function DishCommentContainer() {
    const { id } = useLocalSearchParams<{ id: string }>();
    const { data, isLoading, refetch } = useGetDishComments(id);

    return (
        <View style={styles['dish-comment-container']}>
            {!isLoading && data
                ? (
                    <View style={styles['dish-comment-content']}>
                        <Heading level={3} style={styles['dish-comment-header']}>Komentarze</Heading>
                        {isLoggedIn()
                            ? <DishCommentAddSection refetch={refetch} />
                            : <Text style={styles['text-about-login']}><Link href={'/login'} style={styles['link-to-login']}>Zaloguj się</Link>, aby dodać komentarz.</Text>
                        }
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
    },
    'text-about-login': {
        textAlign: 'center',
        marginBottom: 16
    },
    'link-to-login': {
        color: spanishBlue,
        textDecorationLine: 'underline'
    }
});