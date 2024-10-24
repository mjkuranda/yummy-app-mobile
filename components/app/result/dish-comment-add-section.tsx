import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { Alert, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Input } from '@/components/common/input';
import { Loader } from '@/components/common/loader';
import { postNewComment } from '@/api/api';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { spanishBlue, spanishBlueAlpha } from '@/constants/colors';

interface DishCommentAddSectionProps {
    refetch: () => void;
}

export function DishCommentAddSection({ refetch }: DishCommentAddSectionProps) {
    const { id } = useLocalSearchParams<{ id: string }>();
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
            await postNewComment({
                dishId: id,
                text: commentValue
            });

            refetch();
        } catch (err: unknown) {
            // if (err instanceof ApiError) {
            //     handleApiError(err, router, userContext);
            // }
            // Alert.alert(err.message);
            // NOTE: Possibly tokens do not match
            // FIXME: Refresh token every some time
            Alert.alert('Błąd. Komentarz nie został dodany.');
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
                        ? <Loader size={30} />
                        : (
                            <TouchableOpacity onPress={onAddComment} disabled={commentValue.length === 0}>
                                <View style={styles.iconContainer}>
                                    <Icon name="send" color={commentValue.length === 0 ? spanishBlueAlpha : spanishBlue} size={24} />
                                </View>
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
        flexDirection: 'row'
    },
    'dish-comment-add-section__send-icon': {
        marginTop: 24,
        marginLeft: 8
    },
    iconContainer: {
        marginTop: 4
    }
});