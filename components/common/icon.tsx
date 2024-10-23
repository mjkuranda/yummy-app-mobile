import { DimensionValue, Image, StyleSheet } from 'react-native';
import { dishDetailsImages, userImage, postImage } from '@/assets/assets';

const { authorImage, providerImage, timeImage, ingNotImage, ingYesImage, starEmptyImage, starHalfImage, starFullImage } = dishDetailsImages;

type IconType = 'author' | 'dish-type' | 'time' | 'wrong' | 'tick' | 'star-empty' | 'star-half' | 'star-full' | 'user' | 'post';

interface IconProps {
    type: IconType;
    size?: DimensionValue;
}

export function Icon({ type, size = 16 }: IconProps) {
    const source = getSource(type);
    const styles = withSizeStyles(size);

    return <Image style={styles.icon} source={source} />;
}

function withSizeStyles(size: DimensionValue) {
    return StyleSheet.create({
        icon: {
            width: size,
            height: size
        }
    });
}

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
    case 'post': return postImage;
    default: return null;
    }
}