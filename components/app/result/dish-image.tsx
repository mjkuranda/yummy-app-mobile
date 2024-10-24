import { DishProvider } from '@/types/api.types';
import { useHasImage } from '@/hooks/use-has-image';
import { Loader } from '@/components/common/loader';
import { Dimensions, ImageBackground, StyleSheet, View } from 'react-native';
import { noPhotoImage } from '@/assets/assets';
import { getImageUrlForYummyDishes } from '@/helpers/result.helper';

interface DishImageProps {
    provider: DishProvider;
    imgUrl?: string;
}

export function DishImage({ imgUrl, provider }: DishImageProps) {
    const imageUrl = getImageUrlForYummyDishes(provider, imgUrl);
    const { hasImage, isLoading }  = useHasImage(imageUrl);

    const imageProps = {
        ...(hasImage && { src: imageUrl }),
        ...(!hasImage && { source: noPhotoImage })
    };

    if (isLoading) {
        return (
            <View style={styles['result-image']}>
                <Loader />
            </View>
        );
    }

    return <ImageBackground style={styles['result-image']} {...imageProps} />;
}

const styles = StyleSheet.create({
    'result-image': {
        display: 'flex',
        width: Dimensions.get('window').width - 60,
        height: Dimensions.get('window').width - 60,
        margin: 'auto',
        marginVertical: 30
    }
});