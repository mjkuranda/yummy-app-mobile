import { Dimensions, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { Heading } from '@/components/common/heading';
import { constantStyles } from '@/constants/styles';
import { blueDeFranceAlpha, honeyYellow } from '@/constants/colors';

interface InformationScreenProps {
    title: string;
    description: string;
    image: any; // Image file
    authorInfo: string;
}

export function InformationScreen({ title, description, image, authorInfo }: InformationScreenProps) {
    return (
        <ImageBackground style={styles.mainContainer} source={image} data-author-info={authorInfo}>
            <View style={styles.informationScreenBox}>
                <Heading level={3} style={styles.informationHeading}>{title}</Heading>
                <Text style={styles.informationDescription}>{description}</Text>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        ...constantStyles.flexCenter,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    informationScreenBox: {
        backgroundColor: blueDeFranceAlpha,
        color: honeyYellow,
        paddingTop: 10,
        paddingBottom: 20,
        paddingHorizontal: 20,
        borderRadius: 25,
        width: '80%'
    },
    informationHeading: {
        ...constantStyles.textCenter,
        textShadowColor: 'grey',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 2,
        marginBottom: 10
    },
    informationDescription: {
        ...constantStyles.textCenter,
        color: 'white'
    }
});