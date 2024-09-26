import {
    DetailedMealWithTranslations,
    LoginUserData, MealDocument,
    MealProposal, MealProposalRequest,
    MealResult, NewMealDto, NotActivatedUser,
    UserPermissions
} from '@/types/api.types';
import { apiGet, apiPost, apiPut } from '@/api/methods';
import { encodeIngredients } from '@/helpers/query.helper';
import { UserData } from '@expo/config/build/getUserState';
import { ApiError } from '@/api/api-errors';
import { MealComment, MealDifferenceDto, MealRating, NewMealCommentDto, NewMealRatingDto } from '@/types/meal.types';

export async function getMeal(id: string): Promise<DetailedMealWithTranslations | never> {
    // eslint-disable-next-line no-useless-catch
    try {
        return apiGet<DetailedMealWithTranslations>(`meals/${id}/details`);
    } catch (err) {
        throw err;
    }
}

export async function getMeals(ingredients: string[]): Promise<MealResult[]> {
    if (!ingredients.length) {
        return [];
    }

    return apiGet<MealResult[]>(`meals?ings=${encodeIngredients(ingredients)}`);
}

export async function doUserLogin(login: string, password: string): Promise<UserPermissions> {
    let res: Response;

    // eslint-disable-next-line no-useless-catch
    try {
        res = await apiPost<LoginUserData>('users/login', { login, password });
    } catch (err: unknown) {
        throw err;
    }

    return await res.json();
}

export async function refreshUserTokens() {
    // eslint-disable-next-line no-useless-catch
    try {
        return apiPost<void>('users/refreshTokens');
    } catch (err: unknown) {
        throw err;
    }
}

export async function getMealProposals(): Promise<MealProposal[]> {
    let res: MealProposal[] = [];

    // eslint-disable-next-line no-useless-catch
    try {
        res = await apiGet<MealProposal[]>('meals/proposal/all');
    } catch (err: unknown) {
        throw err;
    }

    return res;
}

export async function addMealProposal(ingredients: string[]): Promise<Response> {
    let res;

    // eslint-disable-next-line no-useless-catch
    try {
        res = await apiPost<MealProposalRequest>('meals/proposal', {
            ingredients: ingredients.sort()
        });
    } catch (err: unknown) {
        throw err;
    }

    return res;
}

export async function getSoftAddedMeals(): Promise<MealDocument[]> {
    let res: MealDocument[] = [];

    // eslint-disable-next-line no-useless-catch
    try {
        res = await apiGet<MealDocument[]>('meals/soft/added');
    } catch (err: unknown) {
        throw err;
    }

    return res;
}

export async function getSoftEditedMeals(): Promise<MealDocument[]> {
    let res: MealDocument[] = [];

    // eslint-disable-next-line no-useless-catch
    try {
        res = await apiGet<MealDocument[]>('meals/soft/edited');
    } catch (err: unknown) {
        throw err;
    }

    return res;
}

export async function getSoftDeletedMeals(): Promise<MealDocument[]> {
    let res: MealDocument[] = [];

    // eslint-disable-next-line no-useless-catch
    try {
        res = await apiGet<MealDocument[]>('meals/soft/deleted');
    } catch (err: unknown) {
        throw err;
    }

    return res;
}

export async function getNotActivatedUsers(): Promise<NotActivatedUser[]> {
    let res: NotActivatedUser[] = [];

    // eslint-disable-next-line no-useless-catch
    try {
        res = await apiGet<NotActivatedUser[]>('users/not-activated');
    } catch (err: unknown) {
        throw err;
    }

    return res;
}

export async function confirmMealAddition(id: string): Promise<MealDocument> {
    let res;

    // eslint-disable-next-line no-useless-catch
    try {
        res = await apiPost(`meals/${id}/create`);
    } catch (err: unknown) {
        throw err;
    }

    return await res.json();
}

export async function confirmMealEdition(id: string): Promise<MealDocument> {
    let res;

    // eslint-disable-next-line no-useless-catch
    try {
        res = await apiPost(`meals/${id}/edit`);
    } catch (err: unknown) {
        throw err;
    }

    return await res.json();
}

export async function confirmMealDeletion(id: string): Promise<MealDocument> {
    let res;

    // eslint-disable-next-line no-useless-catch
    try {
        res = await apiPost(`meals/${id}/delete`);
    } catch (err: unknown) {
        throw err;
    }

    return await res.json();
}

export async function confirmUserActivation(id: string): Promise<void> {
    // eslint-disable-next-line no-useless-catch
    try {
        await apiPost(`users/${id}/activate`);
    } catch (err: unknown) {
        throw err;
    }
}

export async function createUserAccount(data: UserData): Promise<void> {
    let res: Response;

    // eslint-disable-next-line no-useless-catch
    try {
        res = await apiPost<UserData>('users/create', data);
    } catch (err: unknown) {
        throw err;
    }

    return await res.json();
}

export async function uploadImage(image: File): Promise<string> {
    const formData = new FormData();
    formData.append('image', image);

    const res = await apiPost<FormData>('images/upload', formData, true);

    if (res.status > 299) {
        const json = await res.json();

        throw new ApiError(res.status, json.message);
    }

    return await res.text();
}

export async function createMeal(data: NewMealDto): Promise<MealDocument> {
    const res = await apiPost<NewMealDto>('meals/create', data);

    if (res.status > 299) {
        const json = await res.json();

        throw new ApiError(res.status, json.message);
    }

    return await res.json();
}

export async function getMealComments(mealId: string): Promise<MealComment[]> {
    let res: MealComment[] = [];

    // eslint-disable-next-line no-useless-catch
    try {
        res = await apiGet<MealComment[]>(`meals/${mealId}/comments`);
    } catch (err: unknown) {
        throw err;
    }

    return res;
}

export async function postNewComment(data: NewMealCommentDto): Promise<void> {
    const res = await apiPost<NewMealCommentDto>(`meals/${data.mealId}/comment`, data);

    if (res.status > 299) {
        const json = await res.json();

        throw new ApiError(res.status, json.message);
    }
}

export async function getMealRating(mealId: string): Promise<MealRating> {
    let res: MealRating = {
        mealId,
        rating: 0,
        count: 0
    };

    // eslint-disable-next-line no-useless-catch
    try {
        res = await apiGet<MealRating>(`meals/${mealId}/rating`);
    } catch (err: unknown) {
        throw err;
    }

    return res;
}

export async function rateMeal(data: NewMealRatingDto): Promise<void> {
    const res = await apiPost<NewMealRatingDto>(`meals/${data.mealId}/rating`, data);

    if (res.status > 299) {
        const json = await res.json();

        throw new ApiError(res.status, json.message);
    }
}

export async function editMeal(mealId: string, editMealDto: MealDifferenceDto): Promise<void> {
    const res = await apiPut<MealDifferenceDto>(`meals/${mealId}`, editMealDto);

    if (res.status > 299) {
        const json = await res.json();

        throw new ApiError(res.status, json.message);
    }
}