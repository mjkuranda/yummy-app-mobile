import { Dimensions, ImageBackground, StyleSheet, View } from 'react-native';
import { landingImage } from '@/assets/assets';
import { WelcomeScreenPanel } from '@/components/app/welcome-screen-panel';
import { User } from '@/components/app/user';

export function WelcomeScreen() {
    return (
        <ImageBackground source={landingImage}>
            <WelcomeScreenPanel />
            <View style={styles.userContainer}>
                <User />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    userContainer: {
        position: 'absolute',
        top: 0,
        right: 0,
        marginTop: 32,
        marginRight: 8,
        textShadowColor: 'grey',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 2
    }
});