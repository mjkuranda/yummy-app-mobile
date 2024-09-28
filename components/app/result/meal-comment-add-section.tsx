import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { StyleSheet, Text } from 'react-native';

interface MealCommentAddSectionProps {
    // refetch: () => Promise<QueryObserverResult<MealComment[], Error>>;
    refetch: () => void;
}

export function MealCommentAddSection({ refetch }: MealCommentAddSectionProps) {
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

    // FIXME: Remove this
    const onKeyDown = (e: KeyboardEvent): void => {
        // if (e.key === 'Enter') {
        //     onAddComment();
        // }
    };

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
        // <div className={styles['meal-comment-add-section']}>
        //     <div className={styles['meal-comment-add-section__input']}>
        //         <InputString label={'Nowy komentarz'} value={commentValue} setValue={setCommentValue} onKeyDown={onKeyDown} />
        //         <div className={styles['meal-comment-add-section__send-icon']}>
        //             {isPosting ? <Loader /> : <SendIconButton onClick={onAddComment} disabled={commentValue.length === 0} />}
        //         </div>
        //     </div>
        // </div>
        <Text>X</Text>
    );
}

const styles = StyleSheet.create({
    'meal-comment-add-section': {},
    'meal-comment-add-section__input': {},
    'meal-comment-add-section__send-icon': {}
});