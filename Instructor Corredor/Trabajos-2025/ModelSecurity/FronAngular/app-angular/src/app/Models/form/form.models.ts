export interface FormModel {
    id: number;
    name: string,
    description: string;
    active: boolean;
}
export interface FormCreate {
    name: string;
    active: boolean;
    description: string;
}
