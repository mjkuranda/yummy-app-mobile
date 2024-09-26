import { Dimensions, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Heading } from '@/components/common/heading';
import { constantStyles } from '@/constants/styles';
import { blueDeFranceAlpha, honeyYellow } from '@/constants/colors';
import { Href, useRouter } from 'expo-router';

interface InformationScreenProps {
    title: string;
    description: string;
    image: any; // Image file
    authorInfo: string;
    link: Href;
}

export function InformationScreen({ title, description, image, authorInfo, link }: InformationScreenProps) {
    const router = useRouter();

    const onPress = () => router.push(link);

    return (
        <ImageBackground style={styles.mainContainer} source={image} data-author-info={authorInfo}>
            <TouchableOpacity onPress={onPress}>
                <View style={styles.informationScreenBox}>
                    <Heading level={3} style={styles.informationHeading}>{title}</Heading>
                    <Text style={styles.informationDescription}>{description}</Text>
                </View>
            </TouchableOpacity>
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