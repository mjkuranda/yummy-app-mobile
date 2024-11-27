import { Dimensions, ImageBackground, StyleSheet, View } from 'react-native';
import { landingImage } from '@/assets/assets';
import { WelcomeScreenPanel } from '@/components/app/welcome-screen-panel';
import { User } from '@/components/app/user';
import { About } from '@/components/app/about';

export function WelcomeScreen() {
    return (
        <ImageBackground source={landingImage}>
            <View style={styles.blackOverlay}>
                <WelcomeScreenPanel />
                <View style={styles.aboutContainer}>
                    <About />
                </View>
                <View style={styles.userContainer}>
                    <User />
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    blackOverlay: {
        backgroundColor: '#4446'
    },
    aboutContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        marginTop: 32,
        marginLeft: 8,
        textShadowColor: 'grey',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 2
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