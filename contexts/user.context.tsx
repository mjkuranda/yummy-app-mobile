import { UserPermissions } from '@/types/api.types';
import { CurrentUser } from '@/types/user.types';
import { HOUR, MINUTE } from '@/constants/numbers';
import { refreshUserTokens } from '@/api/api';

const state = {
    user: { login: '' }
};

const refreshSessionCallback = () => refreshUserTokens();

let refreshSessionInterval = setInterval(() => {}, HOUR);

export function isLoggedIn(): boolean {
    return state.user.login !== '';
}

export function loginUser(login: string, permissions: UserPermissions): void {
    const user: CurrentUser = { login, ...permissions };
    state.user = { ...user };
    refreshSessionInterval = setInterval(refreshSessionCallback, 5 * MINUTE);
}

export function logoutUser(): void {
    state.user = { login: '' };
    clearInterval(refreshSessionInterval);
}

export function getUser(): CurrentUser {
    return state.user;
}