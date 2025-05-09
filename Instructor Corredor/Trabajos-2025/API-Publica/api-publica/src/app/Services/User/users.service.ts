import { HttpClient } from '@angular/common/http';
import { inject, Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { UsersCreate, UsersList } from '../../Models/Users/user.models';
import { CrudService } from '../CrudGeneric/crud.service';


@Injectable({
  providedIn: 'root'
})
export class UsersService extends CrudService<UsersCreate, UsersList>{

  constructor(http: HttpClient){
    super(http, 'users')
  }

  // private URLBase = environment.apiURL + '/users';
  // private http = inject(HttpClient);
  // constructor() { }

  // public GetAll(): Observable<Users[]> {
  //   return this.http.get<Users[]>(this.URLBase)
  // }

  // public getById(id: number): Observable<Users> {
  //   return this.http.get<Users>(`${this.URLBase}/${id}`)
  // }

  // public Create(models: Users){
  //   return this.http.post(`${this.URLBase}`, models)
  // }

  // public update(id: number, form: Users) {
  //   return this.http.put(`${this.URLBase}/${id}`, form)
  // }

  // public Delete(id: number): Observable<any> {
  //   return this.http.delete(`${this.URLBase}/${id}`);
  // }
}
