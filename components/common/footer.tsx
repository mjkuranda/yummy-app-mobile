import { StyleSheet, Text, View } from 'react-native';
import { Heading } from '@/components/common/heading';
import { cooper } from '@/constants/colors';
import { constantStyles } from '@/constants/styles';

export function Footer() {
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

const styles = StyleSheet.create({
    appFooter: {
        backgroundColor: cooper
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