import { StyleSheet, View } from 'react-native';
import { Button } from '@/components/common/button';
import { ReactNode, useMemo } from 'react';
import { constantStyles } from '@/constants/styles';
import { useRouter } from 'expo-router';
import { encodeIngredients } from '@/helpers/query.helper';
import { useSearchContext } from '@/contexts/search.context';
import { DishTypeText } from '@/types/dish.types';
import { Dropdown } from '@/components/common/dropdown';

interface SearchFormProps {
    children: ReactNode;
}

export function SearchForm({ children }: SearchFormProps) {
    const router = useRouter();
    const { ingredients, type, onSelectType, onClearFilters } = useSearchContext();
    // const mealTypeOptions = useMemo(() => {
    //     const object = { ...MealTypeText, 'any': { en: 'any', pl: 'każdy' } };
    //
    //     return Object
    //         .entries(object)
    //         .map(entry => ({
    //             en: entry[1].en,
    //             label: entry[1].pl[0].toUpperCase() + entry[1].pl.substring(1)
    //         }));
    // },
    // []);
    const dishTypeOptions = useMemo(() => {
        return Object
            .entries(DishTypeText.launch)
            .map(entry => ({
                en: entry[1].en,
                label: entry[1].pl[0].toUpperCase() + entry[1].pl.substring(1)
            }));
    },
    []);

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

        router.push(`/search?ings=${encodeIngredients(ingredientList)}&dish=${type || 'any'}`);
    };

    const isSearchDisabled = Array.from(ingredients).length === 0;

    return (
        <View>
            <View style={styles.searchQueryPart}>
                {children}
            </View>
            <View style={styles['search-dish-type']}>
                <Dropdown
                    label={'Wybierz typ dania:'}
                    options={dishTypeOptions}
                    selectedValue={type}
                    onSelectValue={onSelectType}
                />
            </View>
            <View style={styles.searchButtonContainer}>
                <Button label={'Wyczyść'} onClick={onClearFilters} disabled={isSearchDisabled} />
                <Button label="Szukaj" onClick={onSubmit} disabled={isSearchDisabled}
                    disabledInfo="Zaznacz składniki, aby wyszukać posiłki." />
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
    },
    'search-dish-type': {
        ...constantStyles.flexCenter
    }
});