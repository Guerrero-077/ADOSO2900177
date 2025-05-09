export interface Login{
    email: string;
    password: string;
}

export interface ResponseLogin{
    isSuccess: boolean;
    token: string;
}