import { Dimensions, ImageBackground, StyleSheet, View } from 'react-native';
import { landingImage } from '@/assets/assets';
import { WelcomeScreenPanel } from '@/components/app/welcome-screen-panel';

export function WelcomeScreen() {
    return (
        <ImageBackground source={landingImage}>
            <WelcomeScreenPanel />
            <View style={styles.userContainer}>
                {/*<User />*/}
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
        marginTop: 4,
        marginRight: 4
    }
});