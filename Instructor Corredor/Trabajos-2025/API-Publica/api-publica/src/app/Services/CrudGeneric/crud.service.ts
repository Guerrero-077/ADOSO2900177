import { Injectable, inject } from '@angular/core';
import { ICreateUser } from '../../Models/Crud/crudBasic.models';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

// @Injectable({
//   providedIn: 'root'
// })

export class CrudService<TList, TCreate> implements ICreateUser<TCreate, TList> {

  private URLBase = environment.apiURL + '/';
  constructor(protected http: HttpClient, protected endpoint: string) { }

  getAll(): Observable<TList[]> {
    return this.http.get<TList[]>(`${this.URLBase}/${this.endpoint}`);
  }

  getById(id: number): Observable<TList> {
    return this.http.get<TList>(`${this.URLBase}/${this.endpoint}/${id}`);
  }

  create(data: TCreate): Observable<TCreate> {
    return this.http.post<TCreate>(`${this.URLBase}/${this.endpoint}`, data);
  }
  update(id: number, data: TCreate): Observable<TCreate> {
    return this.http.put<TCreate>(`${this.URLBase}/${this.endpoint}/${id}`, data);
  }
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.URLBase}/${this.endpoint}/${id}`);
  }

}
