import { Dimensions, StyleSheet, View } from 'react-native';
import { constantStyles } from '@/constants/styles';
import { blueDeFranceAlpha, honeyYellow } from '@/constants/colors';
import { Heading } from '@/components/common/heading';
import { Button } from '@/components/common/button';

export function WelcomeScreenPanel() {
    const isLoggedIn = () => false;

    return (
        <View style={styles.mainContainer}>
            <Heading level={1} style={styles.headerPanel}>Yummy</Heading>
            <View style={styles.buttonContainer}>
                <Button label="Szukaj po składnikach" link="/search" />
                <Button label="Propozycja dnia" link="/meal-proposal" disabled={!isLoggedIn()} disabledInfo="Zaloguj się, aby uzyskać rekomendacje posiłków." />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        ...constantStyles.flexCenter,
        flexDirection: 'column',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    headerPanel: {
        textShadowColor: 'grey',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 2,
        color: honeyYellow,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        backgroundColor: blueDeFranceAlpha
    },
    buttonContainer: {
        marginVertical: 80
    }
});