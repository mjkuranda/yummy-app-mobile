import { createContext, ReactNode, useContext, useState } from 'react';
import { useRouter } from 'expo-router';

interface SearchProviderProps {
    children: ReactNode;
    ingredients: Set<string>;
    onAddIngredient: (ingredient: string) => void;
    onRemoveIngredient: (ingredient: string) => void;
    type: string;
    onSelectType: (newType: string) => void;
    onClearFilters: () => void;
}

type SearchContextValues = Omit<SearchProviderProps, 'children'>;

const defaultValue: SearchContextValues = {
    ingredients: new Set(),
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onAddIngredient: (ingredient: string): void => {},
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onRemoveIngredient: (ingredient: string): void => {},
    type: 'any',
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onSelectType: (newType: string): void => {},
    onClearFilters: (): void => {}
};

const SearchContext = createContext<SearchContextValues>(defaultValue);

export const useSearchContext = () => useContext(SearchContext);

export function SearchProvider({ children }: { children: ReactNode }) {
    const router = useRouter();
    const [ingredients, setIngredients] = useState<Set<string>>(new Set());
    const [type, setType] = useState<string>('any');

    const onAddIngredient = (ingredient: string) => {
        if (!ingredients.has(ingredient)) {
            const newIngredients = new Set(ingredients);
            newIngredients.add(ingredient);

            setIngredients(newIngredients);
        }
    };

    const onRemoveIngredient = (ingredient: string) => {
        if (ingredients.has(ingredient)) {
            const newIngredients = new Set(ingredients);
            newIngredients.delete(ingredient);

            setIngredients(newIngredients);
        }
    };

    const onSelectType = (newType: string) => setType(newType);

    const onClearFilters = () => {
        router.push('/search');
        setIngredients(new Set());
        setType('any');
    };

    const contextValue: SearchContextValues = { ingredients, onAddIngredient, onRemoveIngredient, type, onSelectType, onClearFilters };

    return (
        <SearchContext.Provider value={contextValue}>
            {children}
        </SearchContext.Provider>
    );
}