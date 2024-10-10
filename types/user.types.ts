import { UserPermissions } from '@/types/api.types';

export interface CurrentUser extends UserPermissions {
    login: string;
}