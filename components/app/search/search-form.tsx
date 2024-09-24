import { StyleSheet, View } from 'react-native';
import { Button } from '@/components/common/button';
import { ReactNode } from 'react';
import { constantStyles } from '@/constants/styles';

interface SearchFormProps {
    children: ReactNode;
}

export function SearchForm({ children }: SearchFormProps) {
    const onSubmit = () => {};
    const isSearchDisabled = true;

    return (
        <View>
            <View style={styles.searchQueryPart}>
                {children}
            </View>
            <View style={styles.searchButtonContainer}>
                <Button label="Szukaj" onClick={onSubmit} disabled={isSearchDisabled} disabledInfo="Zaznacz składniki, aby wyszukać posiłki." />
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