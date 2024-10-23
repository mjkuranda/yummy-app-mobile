import { DishComment } from '@/types/dish.types';
import { HOUR, MINUTE, SECOND } from '@/constants/numbers';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from '@/components/common/icon';

interface DishCommentContentProps {
    data: DishComment[];
}

export function DishCommentContent({ data }: DishCommentContentProps) {
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
                    <View key={comment._id} style={styles['dish-comment-item']}>
                        <View style={styles['dish-comment-item__header']}>
                            <View style={styles['dish-comment-item__author-container']}>
                                <Icon type="author" />
                                <Text style={{ marginLeft: 4, marginRight: 6, fontWeight: '500' }}>{comment.user}</Text>
                            </View>
                            <Text style={styles['dish-comment-item__posted']}>{getPostedText(comment.posted)}</Text>
                        </View>
                        <Text>{comment.text}</Text>
                    </View>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    'dish-comment-item': {
        marginVertical: 8
    },
    'dish-comment-item__header': {
        flexDirection: 'row'
    },
    'dish-comment-item__author-container': {
        flexDirection: 'row'
    },
    'dish-comment-item__posted': {
        fontStyle: 'italic',
        fontWeight: '200',
        fontSize: 10,
        marginTop: 3
    }
});