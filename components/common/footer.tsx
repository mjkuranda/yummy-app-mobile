import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { Heading } from '@/components/common/heading';
import { cooper } from '@/constants/colors';
import { constantStyles } from '@/constants/styles';

interface FooterProps {
    isFull?: boolean;
}

export function Footer({ isFull = false }: FooterProps) {
    const styles = withIsFullStyles(isFull);

    return (
        <View style={styles.appFooter}>
            <View style={styles.footerContainer}>
                <Text style={constantStyles.textCenter}>Wszelkie prawa zastrzeżone</Text>
                <View style={styles.authorInformation}>
                    <Heading level={3} style={constantStyles.textCenter}>Marek Kurańda</Heading>
                    <Heading level={4} style={constantStyles.textCenter}>DishMatcher &copy; 2024</Heading>
                </View>
            </View>
        </View>
    );
}

function withIsFullStyles(isFull: boolean) {
    return StyleSheet.create({
        appFooter: {
            backgroundColor: cooper,
            alignItems: 'center',
            justifyContent: 'center',
            ...(isFull && { height: Dimensions.get('window').height })
        },
        footerContainer: {
            paddingTop: 32,
            paddingBottom: 16,
            textAlign: 'center'
        },
        authorInformation: {
            marginVertical: 16
        }
    });
}
