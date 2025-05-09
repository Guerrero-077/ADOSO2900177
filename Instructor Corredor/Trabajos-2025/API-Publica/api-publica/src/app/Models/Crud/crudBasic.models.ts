import { Observable } from "rxjs";

export interface ICreateUser<TCreate, TList> {
    getAll(): Observable<TList[]>;
    getById(id: number): Observable<TList>;
    create(data: TCreate): Observable<TCreate>;
    update(id: number, data: TCreate): Observable<TCreate>;
    delete(id: number): Observable<void>;
}
