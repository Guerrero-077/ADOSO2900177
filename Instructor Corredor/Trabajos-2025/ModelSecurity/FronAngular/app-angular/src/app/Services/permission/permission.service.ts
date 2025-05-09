import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Permission, PermissionCreate } from '../../Models/permission/permission.models';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {
  private http = inject(HttpClient);
  private URLBase = environment.apiUrl + '/permission';

  public getAllPermission(): Observable<Permission[]> {
    return this.http.get<Permission[]>(this.URLBase);
  }

  public getById(id: number): Observable<Permission> {
    return this.http.get<Permission>(`${this.URLBase}/${id}`)
  }

  public createForm(form: PermissionCreate) {
    return this.http.post(this.URLBase, form);
  }

  public update(id: number, form: PermissionCreate) {
    return this.http.put(`${this.URLBase}/${id}`, form)

  }
  public delete(id: number): Observable<any> {
    return this.http.delete(`${this.URLBase}/${id}`);
  }


  public getAllDelete(): Observable<Permission[]> {
    return this.http.get<Permission[]>(this.URLBase + '/getDelete');
  }


  public logicalDelete(id: number): Observable<any> {
    return this.http.patch(`${this.URLBase}/logical-delete/${id}`, {});
  }

  public logicalRestore(id: number): Observable<any> {
    return this.http.patch(`${this.URLBase}/logical-restore/${id}`, {});
  }

  constructor() { }
}
