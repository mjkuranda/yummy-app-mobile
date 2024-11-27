import { StyleSheet, Text, View } from 'react-native';
import { orangeYellowCrayola } from '@/constants/colors';

export function AboutContainer() {
    return (
        <View style={styles['about-page']}>
            <View style={styles['about-container']}>
                <View style={styles['about-section']}>
                    <Text style={styles.centerText}>Aplikacja została wykonana w ramach <Text style={{ fontWeight: 'bold' }}>pracy inżynierskiej</Text>.</Text>
                    <Text style={styles.centerText}>Tematem pracy była <Text style={{ fontWeight: 'bold' }}>Platforma do zarządzania i rekomendacji dań</Text></Text>
                    <Text style={styles.centerText}>(<Text style={{ fontStyle: 'italic' }}>Dish management and recommendation platform</Text>)</Text>
                </View>
                <View style={styles['about-section']}>
                    <Text style={styles.centerText}>Autorem jest <Text style={{ fontWeight: 'bold' }}>Marek Kurańda</Text>.</Text>
                    <Text style={styles.centerText}>Student kierunku <Text style={{ fontWeight: 'bold' }}>Informatyka w Inżynierii Komputerowej</Text></Text>
                    <Text style={styles.centerText}>na <Text style={{ fontWeight: 'bold' }}>Wydziale Inżynierii Elektrycznej i Komputerowej</Text></Text>
                    <Text style={styles.centerText}>na <Text style={{ fontWeight: 'bold' }}>Politechnice Krakowskiej</Text>.</Text>
                </View>
                <View style={styles['about-section']}>
                    <Text style={styles.centerText}>Promotorem pracy jest <Text style={{ fontWeight: 'bold' }}>dr inż. Damian Grela</Text>.</Text>
                </View>
                <View style={styles['about-section']}>
                    <Text style={styles.centerText}>Aktualna wersja z dnia: <Text style={{ fontStyle: 'italic' }}>27.11.2024 r</Text>.</Text>
                    <Text style={styles.centerText}><Text style={{ fontStyle: 'italic' }}>v1.19.0</Text></Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    'about-page': {
        backgroundColor: orangeYellowCrayola,
        paddingVertical: 16,
        paddingHorizontal: 32,
        flex: 1,
        alignContent: 'center'
    },
    'about-container': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    'about-section': {
        marginVertical: 20
    },
    centerText: {
        textAlign: 'center'
    }
});