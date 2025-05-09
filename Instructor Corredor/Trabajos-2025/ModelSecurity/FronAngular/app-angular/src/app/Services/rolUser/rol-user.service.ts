import { inject, Injectable } from '@angular/core';
import { RolUser, RolUserCreate } from '../../Models/rolUser/rolUser.models';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RolUserService {
  private http = inject(HttpClient)
  private URLBase = environment.apiUrl + '/rolUser';

  public getAllRolUser(): Observable<RolUser[]> {
    return this.http.get<RolUser[]>(this.URLBase);
  }

  public getById(id: number): Observable<RolUser> {
    return this.http.get<RolUser>(`${this.URLBase}/${id}`)
  }

  public create(form: RolUserCreate) {
    return this.http.post(this.URLBase, form);
  }

  public update(id: number, form: RolUserCreate) {
    return this.http.put(`${this.URLBase}/${id}`, form)

  }
  public delete(id: number): Observable<any> {
    return this.http.delete(`${this.URLBase}/${id}`);
  }

  public logicalDelete(id: number): Observable<any> {
    return this.http.patch(`${this.URLBase}/logical-delete/${id}`, {});
  }

  public logicalRestore(id: number): Observable<any> {
    return this.http.patch(`${this.URLBase}/logical-restore/${id}`, {});
  }
  constructor() { }
}
