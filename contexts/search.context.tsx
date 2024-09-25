import { createContext, ReactNode, useContext, useState } from 'react';

interface SearchProviderProps {
    children: ReactNode;
    ingredients: Set<string>;
    onAddIngredient: (ingredient: string) => void;
    onRemoveIngredient: (ingredient: string) => void;
}

type SearchContextValues = Omit<SearchProviderProps, 'children'>;

const defaultValue: SearchContextValues = {
    ingredients: new Set(),
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onAddIngredient: (ingredient: string): void => {},
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onRemoveIngredient: (ingredient: string): void => {}
};

const SearchContext = createContext<SearchContextValues>(defaultValue);

export const useSearchContext = () => useContext(SearchContext);

export function SearchProvider({ children }: { children: ReactNode }) {
    const [ingredients, setIngredients] = useState<Set<string>>(new Set());

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

    const contextValue: SearchContextValues = { ingredients, onAddIngredient, onRemoveIngredient };

    return (
        <SearchContext.Provider value={contextValue}>
            {children}
        </SearchContext.Provider>
    );
}