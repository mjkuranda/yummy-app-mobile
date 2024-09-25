import { StyleSheet, View } from 'react-native';
import { Button } from '@/components/common/button';
import { ReactNode } from 'react';
import { constantStyles } from '@/constants/styles';
import { useRouter } from 'expo-router';
import { encodeIngredients } from '@/helpers/query.helper';
import { useSearchContext } from '@/contexts/search.context';

interface SearchFormProps {
    children: ReactNode;
}

export function SearchForm({ children }: SearchFormProps) {
    const router = useRouter();
    const { ingredients } = useSearchContext();

    const onSubmit = async (): Promise<void> => {
        const ingredientList = Array.from(ingredients);

        if (ingredientList.length === 0) {
            return router.push('/search');
        }

        // try {
        //     await addMealProposal(ingredients);
        // } catch (err: any) {
        //     if (!(err instanceof UnauthorizedError)) {
        //         toastError(`Error occurred while adding a new meal proposal: ${err.message}`);
        //     }
        // }

        router.push(`/search?ings=${encodeIngredients(ingredientList)}`);
    };

    const isSearchDisabled = Array.from(ingredients).length > 0;

    return (
        <View>
            <View style={styles.searchQueryPart}>
                {children}
            </View>
            <View style={styles.searchButtonContainer}>
                <Button label="Szukaj" onClick={onSubmit} disabled={!isSearchDisabled} disabledInfo="Zaznacz składniki, aby wyszukać posiłki." />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    searchQueryPart: {},
    searchButtonContainer: {
        ...constantStyles.flexCenter,
        marginTop: 20,
        marginBottom: 15
    }
});