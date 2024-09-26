import { MealComment } from '@/types/meal.types';
import { HOUR, MINUTE, SECOND } from '@/constants/numbers';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from '@/components/common/icon';

interface MealCommentContentProps {
    data: MealComment[];
}

export function MealCommentContent({ data }: MealCommentContentProps) {
    const getPostedText = (postedComment: number): string => {
        const diff = Date.now() - postedComment;

        if (diff < SECOND * 10) {
            return 'Chwilę temu';
        }

        if (diff < MINUTE) {
            return 'Mniej niż 1 minutę temu';
        }

        if (diff < HOUR) {
            return `${Math.ceil(diff / MINUTE)} minut temu`;
        }

        return new Date(postedComment).toLocaleDateString();
    };

    if (data.length === 0) {
        return <Text style={{ textAlign: 'center' }}>Brak komentarzy</Text>;
    }

    return (
        <View>
            {data.sort((a, b) => b.posted - a.posted).map(comment => {
                return (
                    <View key={comment._id} style={styles['meal-comment-item']}>
                        <View style={styles['meal-comment-item__header']}>
                            <View>
                                <Icon type="author" />
                                <Text>{comment.user}</Text>
                            </View>
                            <Text style={styles['meal-comment-item__posted']}>{getPostedText(comment.posted)}</Text>
                        </View>
                        <Text>{comment.text}</Text>
                    </View>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    'meal-comment-item': {},
    'meal-comment-item__header': {},
    'meal-comment-item__posted': {}
});