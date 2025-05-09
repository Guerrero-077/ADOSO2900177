export interface RolUser{
    id: number,
    userId: number,
    userName: string;
    rolId: number;
    rolName: string;
}
export interface RolUserCreate{
    id: number,
    userId: number,
    rolId: number
}