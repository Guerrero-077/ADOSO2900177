import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

export class GenericService<T, ICreate> {
  public _endpont: string;
  protected Http = inject(HttpClient);
  private URLBase = environment.apiUrl;

  constructor(endpoint: string) {
    this._endpont = `${this.URLBase}/${endpoint}`;
  }

  public GetAll(): Observable<T[]> {
    return this.Http.get<T[]>(this._endpont);
  }

  public GetById(id: number): Observable<T> {
    return this.Http.get<T>(`${this._endpont}/${id}`);
  }

  public Create(entity: ICreate): Observable< ICreate> {
    return this.Http.post< ICreate>(this._endpont, entity);
  }

  public Update(entity: T): Observable<any> {
    return this.Http.put<any>(this._endpont, entity);
  }

  public Delete(id: number): Observable<any> {
    return this.Http.delete<any>(`${this._endpont}/${id}`);
  }

}
