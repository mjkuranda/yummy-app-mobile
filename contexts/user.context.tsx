import { UserPermissions } from '@/types/api.types';
import { CurrentUser } from '@/types/user.types';

const state = {
    user: { login: '' }
};

export function isLoggedIn(): boolean {
    return state.user.login !== '';
}

export function loginUser(login: string, permissions: UserPermissions): void {
    const user: CurrentUser = { login, ...permissions };
    state.user = { ...user };
}

export function logoutUser(): void {
    state.user = { login: '' };
}

export function getUser(): CurrentUser {
    return state.user;
}