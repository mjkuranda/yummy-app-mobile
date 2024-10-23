import { ScrollView, View } from 'react-native';
import { WelcomeScreen } from '@/components/app/welcome-screen';
import { InformationScreen } from '@/components/app/information-screen';
import { Footer } from '@/components/common/footer';
import { fridgeImage, integrateImage, dishesImage } from '@/assets/assets';
import { useSmoothScreenScroll } from '@/hooks/use-smooth-screen-scroll';

export default function HomeScreen() {
    const { scrollViewRef, onScroll } = useSmoothScreenScroll();

    return (
        <ScrollView ref={scrollViewRef} onScroll={onScroll} scrollEventThrottle={16.67}>
            <WelcomeScreen />
            <View>
                <InformationScreen
                    title="Szalenie łatwe"
                    description="Podaj składniki, które Cię interesują i wybierz typ, a otrzymasz najlepsze dopasowania."
                    image={fridgeImage}
                    authorInfo={'Image by <a href="https://pixabay.com/users/rperucho-7689351/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=7251301">Ramon Perucho</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=7251301">Pixabay</a>'}
                    link="/search"
                />
                <InformationScreen
                    title="Posiłki"
                    description="Zawiera ponad 100 000 posiłków, integrując posiłki z innych serwisów!"
                    image={dishesImage}
                    authorInfo={'Image by <a href="https://pixabay.com/users/buffetcrush-4147660/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2009590">지원 이</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2009590">Pixabay</a>'}
                    link="/search"
                />
                <InformationScreen
                    title="Integruje"
                    description="Tworzy i skupia społeczność, którzy również chcą podzielić się swoimi posiłkami, bądź promować już dodane."
                    image={integrateImage}
                    authorInfo={'Image by <a href="https://pixabay.com/users/surprising_snapshots-11873433/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=7530848">Mircea Iancu</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=7530848">Pixabay</a>'}
                    link="/login"
                />
            </View>
            <Footer />
        </ScrollView>
    );
}
