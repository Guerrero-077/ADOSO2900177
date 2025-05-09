import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Rol, RolCreate } from '../../Models/Rol/Rol.models';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  private http = inject(HttpClient);
  private URLBase = environment.apiUrl + '/rol';

  public getAllRol(): Observable<Rol[]> {
    return this.http.get<Rol[]>(this.URLBase);
  }

  public getById(id: number): Observable<Rol> {
    return this.http.get<Rol>(`${this.URLBase}/${id}`)
  }

  public createRol(form: RolCreate) {
    return this.http.post(this.URLBase, form);
  }

  public update(id: number, form: RolCreate) {
    return this.http.put(`${this.URLBase}/${id}`, form)

  }
  public delete(id: number): Observable<any> {
    return this.http.delete(`${this.URLBase}/${id}`);
  }

  public getAllDelete(): Observable<Rol[]>{
    return this.http.get<Rol[]>(`${this.URLBase}/getDelete`);
  }

  public logicalDelete(id: number): Observable<any> {
    return this.http.patch(`${this.URLBase}/logical-delete/${id}`, {});
  }

  public logicalRestore(id: number): Observable<any> {
    return this.http.patch(`${this.URLBase}/logical-restore/${id}`, {});
  }
  constructor() { }
}
