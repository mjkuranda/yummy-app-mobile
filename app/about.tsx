import { ScrollView } from 'react-native';
import { Header } from '@/components/common/header';
import { Footer } from '@/components/common/footer';
import { AboutContainer } from '@/components/app/about/about-container';

export default function AboutScreen() {
    return (
        <ScrollView>
            <Header />
            <AboutContainer />
            <Footer />
        </ScrollView>
    );
}