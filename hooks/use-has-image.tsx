import { useEffect, useState } from 'react';
import { Image } from 'react-native';

interface useHasImageReturnType {
    hasImage: boolean;
    isLoading: boolean;
}

export function useHasImage(imgUrl?: string): useHasImageReturnType {
    const [hasImage, setHasImage] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        if (!imgUrl) {
            setIsLoading(false);

            return;
        }

        checkImageUrl(imgUrl)
            .then(result => setHasImage(result))
            .catch(() => setHasImage(false))
            .finally(() => setIsLoading(false));
    }, []);

    return { hasImage, isLoading };
}

function checkImageUrl(urlString: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
        Image.prefetch(urlString)
            .then(() => resolve(true))
            .catch(() => reject(false));
    });
}