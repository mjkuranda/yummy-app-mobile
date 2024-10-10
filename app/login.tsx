import { Footer } from '@/components/common/footer';
import { LoginForm } from '@/components/app/login/login-form';
import { Dimensions, StyleSheet, View } from 'react-native';
import { orangeYellowCrayola } from '@/constants/colors';

export default function LoginScreen() {
    return (
        <View style={styles['login-page']}>
            <LoginForm />
            <Footer />
        </View>
    );
}

const styles = StyleSheet.create({
    'login-page': {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height - 56,
        backgroundColor: orangeYellowCrayola,
        display: 'flex',
        justifyContent: 'space-between'
    }
});