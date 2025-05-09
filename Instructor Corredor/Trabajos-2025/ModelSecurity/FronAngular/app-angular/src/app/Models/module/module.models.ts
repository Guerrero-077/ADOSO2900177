export interface Module{
    id: number;
    name: string;
    description: string;
}

export interface ModuleCreate{
    id: number;
    name: string;
    description: string;
    active: boolean;
}