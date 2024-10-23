import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Input } from '@/components/common/input';
import { Loader } from '@/components/common/loader';
import { Icon } from '@/components/common/icon';

interface DishCommentAddSectionProps {
    // refetch: () => Promise<QueryObserverResult<MealComment[], Error>>;
    refetch: () => void;
}

export function DishCommentAddSection({ refetch }: DishCommentAddSectionProps) {
    const { id } = useLocalSearchParams<{ id: string }>();
    // const userContext = useUserContext();
    const router = useRouter();
    const [commentValue, setCommentValue] = useState<string>('');
    const [isPosting, setIsPosting] = useState<boolean>(false);

    useEffect(() => {
        if (isPosting) {
            setCommentValue('');
        }
    }, [isPosting]);

    const onAddComment = async () => {
        setIsPosting(true);

        try {
            // await postNewComment({
            //     mealId: id,
            //     text: commentValue
            // });
            //
            // await refetch();
        } catch (err: unknown) {
            // if (err instanceof ApiError) {
            //     handleApiError(err, router, userContext);
            // }
        } finally {
            setIsPosting(false);
        }
    };

    return (
        <View style={styles['dish-comment-add-section']}>
            <View style={styles['dish-comment-add-section__input']}>
                <Input label={'Nowy komentarz'} value={commentValue} onChange={setCommentValue} />
                <View style={styles['dish-comment-add-section__send-icon']}>
                    {isPosting
                        ? <Loader />
                        : (
                            <TouchableOpacity onPress={onAddComment} disabled={commentValue.length === 0}>
                                <Icon type="post" size={32} />
                            </TouchableOpacity>
                        )
                    }
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    'dish-comment-add-section': {
        marginVertical: 8
    },
    'dish-comment-add-section__input': {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    'dish-comment-add-section__send-icon': {
        marginTop: 24,
        marginLeft: 8
    }
});