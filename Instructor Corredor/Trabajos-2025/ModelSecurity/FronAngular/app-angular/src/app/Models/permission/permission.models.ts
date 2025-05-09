export interface Permission {
    id: number;
    name: string;
    description: string;
}
export interface PermissionCreate {
    name: string;
    description: string;
}