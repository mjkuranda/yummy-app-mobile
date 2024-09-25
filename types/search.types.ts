export interface SearchFormData {
    ingredients: string[];
}

export interface SearchFilters {
    originalQuery: string;
    ings: string[];
}

export interface SearchQuery {
    ings: string;
}