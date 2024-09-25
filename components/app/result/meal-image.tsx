import { MealProvider } from '@/types/api.types';
import { useHasImage } from '@/hooks/use-has-image';
import { Loader } from '@/components/common/loader';
import { Dimensions, ImageBackground, StyleSheet } from 'react-native';
import { noPhotoImage } from '@/assets/assets';
import { getImageUrlForYummyMeals } from '@/helpers/result.helper';

interface MealImageProps {
    provider: MealProvider;
    imgUrl?: string;
}

export function MealImage({ imgUrl, provider }: MealImageProps) {
    const imageUrl = getImageUrlForYummyMeals(provider, imgUrl);
    const { hasImage, isLoading }  = useHasImage(imageUrl);

    const imageProps = {
        ...(hasImage && { src: imageUrl }),
        ...(!hasImage && { source: noPhotoImage })
    };

    if (isLoading) {
        return <Loader />;
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