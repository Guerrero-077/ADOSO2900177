import { inject, Injectable } from '@angular/core';
import { User, UserCreate } from '../../Models/user/user.models';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private http = inject(HttpClient);
  private URLBase = environment.apiUrl + '/user';

  public getAllUser(): Observable<User[]> {
    return this.http.get<User[]>(this.URLBase);
  }


  public getById(id: number): Observable<User> {
    return this.http.get<User>(`${this.URLBase}/${id}`)
  }

  public createForm(form: UserCreate) {
    return this.http.post(this.URLBase, form);
  }

  public update(id: number, form: UserCreate) {
    return this.http.put(`${this.URLBase}/${id}`, form)

  }
  public delete(id: number): Observable<any> {

    return this.http.delete(`${this.URLBase}/${id}`);
  }

  public getAllDeletes(): Observable<User[]> {
    return this.http.get<User[]>(`${this.URLBase}/getDelete`);
  }

  public logicalDelete(id: number): Observable<any> {
    return this.http.patch(`${this.URLBase}/logical-delete/${id}`, {});
  }

  public logicalRestore(id: number): Observable<any> {
    return this.http.patch(`${this.URLBase}/logical-restore/${id}`, {});
  }
  constructor() { }
}
