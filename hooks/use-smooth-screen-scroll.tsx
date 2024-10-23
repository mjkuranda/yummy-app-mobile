import { useRef, useState } from 'react';
import { Dimensions, NativeScrollEvent, NativeSyntheticEvent, ScrollView } from 'react-native';

export function useSmoothScreenScroll() {
    const [scrollDirection, setScrollDirection] = useState<string | null>(null);
    const lastScrollY = useRef(0);
    const scrollViewRef = useRef<ScrollView>(null);
    const [currentOffset, setCurrentOffset] = useState(0); // Przechowuje aktualny offset (pozycja scrolla)

    const screenHeight = Dimensions.get('window').height;

    const scrollDown = () => {
        if (scrollViewRef.current) {
            const newOffset = currentOffset + screenHeight;
            scrollViewRef.current.scrollTo({ y: newOffset, animated: true });
            setCurrentOffset(newOffset);
            lastScrollY.current = newOffset;
        }
    };

    const scrollUp = () => {
        if (scrollViewRef.current) {
            const newOffset = Math.max(0, currentOffset - screenHeight);
            scrollViewRef.current.scrollTo({ y: newOffset, animated: true });
            setCurrentOffset(newOffset);
            lastScrollY.current = newOffset;
        }
    };

    const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>): void => {
        const currentScrollY = event.nativeEvent.contentOffset.y;

        // console.log(scrollDirection, currentScrollY, currentOffset);

        if (scrollDirection === 'down' && currentScrollY < currentOffset) {
            return;
        }

        if (scrollDirection === 'up' && currentScrollY > currentOffset) {
            return;
        }

        if (currentScrollY === currentOffset) {
            setScrollDirection(null);

            return;
        }

        console.log(currentScrollY, lastScrollY.current);

        if (currentScrollY > lastScrollY.current) {
            setScrollDirection('down');
            scrollDown();
        } else if (currentScrollY < lastScrollY.current) {
            setScrollDirection('up');
            scrollUp();
        }

        // lastScrollY.current = currentScrollY;
    };

    return { scrollViewRef, onScroll };
}