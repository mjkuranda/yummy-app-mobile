import { Image, StyleSheet, View } from 'react-native';
import { constantStyles } from '@/constants/styles';
import { Heading } from '@/components/common/heading';
import { cooper } from '@/constants/colors';
import { yummyLogo } from '@/assets/assets';

export function Header() {
    return (
        <View style={styles.appHeader}>
            <View style={styles.container}>
                <View style={styles.leftContent}>
                    <Image style={styles.logo} source={yummyLogo} />
                    <Heading level={1} style={{ marginLeft: 10 }}>Yummy</Heading>
                </View>
                {/*<View style={constantStyles.flexCenter}>*/}
                {/*    <User />*/}
                {/*</View>*/}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appHeader: {
        backgroundColor: cooper,
        paddingVertical: 30
    },
    container: {
        ...constantStyles.flexCenter,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    leftContent: {
        ...constantStyles.flexCenter,
        flexDirection: 'row'
    },
    logo: {
        width: 64,
        height: 64
    }
});