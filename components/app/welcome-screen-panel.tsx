import { Dimensions, StyleSheet, View } from 'react-native';
import { constantStyles } from '@/constants/styles';
import { blueDeFranceAlpha, honeyYellow } from '@/constants/colors';
import { Heading } from '@/components/common/heading';
import { Button } from '@/components/common/button';
import { isLoggedIn } from '@/contexts/user.context';
import Icon from 'react-native-vector-icons/MaterialIcons';

export function WelcomeScreenPanel() {
    return (
        <View style={styles.mainContainer}>
            <Heading level={1} style={styles.headerPanel}>DishMatcher</Heading>
            <View style={styles.buttonContainer}>
                <Button label="Szukaj po składnikach" link="/search" icon={<Icon name="search" color="white" size={16} />} />
                <Button label="Propozycja dnia" link="/dish-proposal" icon={<Icon name="saved-search" color="white" size={16} />} disabled={!isLoggedIn()} disabledInfo="Zaloguj się, aby uzyskać rekomendacje dań." />
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
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 10,
        backgroundColor: blueDeFranceAlpha
    },
    buttonContainer: {
        marginVertical: 80
    }
});