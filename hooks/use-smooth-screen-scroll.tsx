import { useEffect, useRef, useState } from 'react';
import { Dimensions, NativeScrollEvent, NativeSyntheticEvent, ScrollView } from 'react-native';

export function useSmoothScreenScroll() {
    const [scrollDirection, setScrollDirection] = useState<string | null>(null);
    const lastScrollY = useRef(0);
    const scrollViewRef = useRef<ScrollView>(null);
    const [currentOffset, setCurrentOffset] = useState(0); // Przechowuje aktualny offset (pozycja scrolla)
    const [screen, setScreen] = useState<number>(0);

    const screenHeight = Dimensions.get('window').height;

    useEffect(() => {
        if (screen === 3) {
            setScreen(4);

            return;
        }

        const newScreen = currentOffset / Dimensions.get('window').height;

        setScreen(newScreen);
    }, [currentOffset]);

    const scrollDown = (offset: number = screenHeight) => {
        if (scrollViewRef.current) {
            const newOffset = currentOffset + offset;
            scrollViewRef.current.scrollTo({ y: newOffset, animated: true });
            setCurrentOffset(newOffset);
            setScrollDirection('down');
            lastScrollY.current = newOffset;
        }
    };

    const scrollUp = (offset: number = screenHeight) => {
        if (scrollViewRef.current) {
            const newOffset = Math.max(0, currentOffset - offset);
            scrollViewRef.current.scrollTo({ y: newOffset, animated: true });
            setCurrentOffset(newOffset);
            setScrollDirection('up');
            lastScrollY.current = newOffset;
        }
    };

    const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>): void => {
        const currentScrollY = event.nativeEvent.contentOffset.y;

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

        if (currentScrollY > lastScrollY.current) {
            scrollDown();
        } else if (currentScrollY < lastScrollY.current) {
            scrollUp();
        }
    };

    return { scrollViewRef, onScroll };
}