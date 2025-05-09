
export interface User {
    id: number,
    user_name: string,
    email: string,
    password: string,
    person_id: number
    active: true,
}
export interface UserCreate {
    user_name: string,
    email: string,
    password: string,
    active: boolean,
    person_id: number
}
