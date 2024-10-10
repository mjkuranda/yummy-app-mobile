import { ScrollView } from 'react-native';
import { Header } from '@/components/common/header';
import { Footer } from '@/components/common/footer';
import { DishProposalContainer } from '@/components/app/dish-proposal/dish-proposal-container';

export default function DishProposalScreen() {
    return (
        <ScrollView>
            <Header />
            <DishProposalContainer />
            <Footer />
        </ScrollView>
    );
}