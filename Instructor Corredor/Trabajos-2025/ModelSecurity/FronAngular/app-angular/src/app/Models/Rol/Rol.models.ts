export interface Rol{
    id: number;
    name: string;
    description: string;
    active: boolean
}
export interface RolCreate{
    name: string;
    description: string;
    active: boolean;
}