import { ScrollView, StyleSheet, View } from 'react-native';
import { Header } from '@/components/common/header';
import { Footer } from '@/components/common/footer';
import { SearchForm } from '@/components/app/search/search-form';
import { SearchIngredientCategory } from '@/components/app/search/search-ingredient-category';
import { orangeYellowCrayola } from '@/constants/colors';
import { SearchProvider } from '@/contexts/search.context';
import { MealResultBox } from '@/components/app/search/meal-result-box';

export default function SearchScreen() {
    return (
        <ScrollView style={styles.searchContainer}>
            <Header />
            <SearchProvider>
                <SearchForm>
                    <SearchIngredientCategory category="breads" />
                    <SearchIngredientCategory category="dairy-and-eggs" />
                    <SearchIngredientCategory category="fish-and-seafood" />
                    <SearchIngredientCategory category="fruits" />
                    <SearchIngredientCategory category="meats" />
                    <SearchIngredientCategory category="mushrooms" />
                    <SearchIngredientCategory category="oils-and-fats" />
                    <SearchIngredientCategory category="pasta" />
                    <SearchIngredientCategory category="seeds-and-nuts" />
                    <SearchIngredientCategory category="spices" />
                    <SearchIngredientCategory category="vegetables" />
                </SearchForm>
            </SearchProvider>
            <View style={styles.mealResultPart}>
                <MealResultBox />
            </View>
            <Footer />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    searchContainer: {
        backgroundColor: orangeYellowCrayola
    },
    mealResultPart: {},
    adder: {}
});