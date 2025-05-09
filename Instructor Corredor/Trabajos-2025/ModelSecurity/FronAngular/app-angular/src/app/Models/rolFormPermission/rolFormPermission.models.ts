export interface RolFormPermission {
    id: number
    rolid: number;
    formid: number;
    active: boolean
    permissionid: number;
}
export interface RolFormPermissionCreate {
    rolid: number;
    formid: number;
    active: boolean;
    permissionid: number;
}