import { useState } from 'react';
import { doUserLogin } from '@/api/api';
import { loginUser } from '@/contexts/user.context';
import { Alert, StyleSheet, View } from 'react-native';
import { Input } from '@/components/common/input';
import { Heading } from '@/components/common/heading';
import { Button } from '@/components/common/button';
import { Loader } from '@/components/common/loader';
import { useRouter } from 'expo-router';

export function LoginForm() {
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isLogging, setIsLogging] = useState<boolean>(false);
    const router = useRouter();

    const onLogIn = async () => {
        setIsLogging(true);

        try {
            const permissions = await doUserLogin(login, password);
            loginUser(login, permissions);
            router.push('/');

            setLogin('');
            setPassword('');

            Alert.alert('Pomyślnie zalogowano');
        } catch (err: any) {
            Alert.alert(err.message);
        } finally {
            setIsLogging(false);
        }
    };

    const onChangeLogin = (login: string): void => setLogin(login);

    const onChangePassword = (password: string): void => setPassword(password);

    const isLoginDisabled = (): boolean => login.length === 0 || password.length === 0;

    return (
        <View style={styles.loginContainer}>
            <Heading level={3} style={{ marginBottom: 16 }}>Zaloguj się</Heading>
            <Input label="Podaj login" value={login} onChange={onChangeLogin} />
            <View style={styles.break}></View>
            <Input label="Podaj hasło" value={password} onChange={onChangePassword} isPassword={true} />
            <View style={styles.buttonContainer}>
                <Button label="Zaloguj" onClick={onLogIn} disabled={isLoginDisabled() || isLogging} />
            </View>
            {isLogging && <Loader />}
        </View>
    );
}

const styles = StyleSheet.create({
    loginContainer: {
        marginVertical: 20,
        marginTop: 140,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer: {
        marginTop: 40
    },
    break: {
        height: 10
    }
});