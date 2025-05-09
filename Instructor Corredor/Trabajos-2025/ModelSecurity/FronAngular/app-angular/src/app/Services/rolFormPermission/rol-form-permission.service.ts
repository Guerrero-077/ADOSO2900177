import { inject, Injectable } from '@angular/core';
import { RolFormPermission, RolFormPermissionCreate } from '../../Models/rolFormPermission/rolFormPermission.models';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RolFormPermissionService {

  private http = inject(HttpClient);
  private URLBase = environment.apiUrl + '/rolFormPermission';

  public getAllRolFormPermission(): Observable<RolFormPermission[]> {
    return this.http.get<RolFormPermission[]>(this.URLBase);
  }

  public getById(id: number): Observable<RolFormPermission> {
    return this.http.get<RolFormPermission>(`${this.URLBase}/${id}`)
  }

  public create(form: RolFormPermissionCreate) {
    return this.http.post(this.URLBase, form);
  }

  public update(id: number, form: RolFormPermissionCreate) {
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
