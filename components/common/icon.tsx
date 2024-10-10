import { Image, StyleSheet } from 'react-native';
import { dishDetailsImages, userImage } from '@/assets/assets';

const { authorImage, providerImage, timeImage, ingNotImage, ingYesImage, starEmptyImage, starHalfImage, starFullImage } = dishDetailsImages;

type IconType = 'author' | 'dish-type' | 'time' | 'wrong' | 'tick' | 'star-empty' | 'star-half' | 'star-full' | 'user';

interface IconProps {
    type: IconType;
}

export function Icon({ type }: IconProps) {
    const source = getSource(type);

    return <Image style={styles.icon} source={source} />;
}

const styles = StyleSheet.create({
    icon: {
        width: 16,
        height: 16
    }
});

function getSource(type: IconType) {
    switch (type) {
    case 'author': return authorImage;
    case 'dish-type': return providerImage;
    case 'time': return timeImage;
    case 'wrong': return ingNotImage;
    case 'tick': return ingYesImage;
    case 'star-empty': return starEmptyImage;
    case 'star-half': return starHalfImage;
    case 'star-full': return starFullImage;
    case 'user': return userImage;
    default: return null;
    }
}