import { inject, Injectable } from '@angular/core';
import { Module, ModuleCreate } from '../../Models/module/module.models';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {
  private http = inject(HttpClient);
  private URLBase = environment.apiUrl + '/module';

  public getAllModule(): Observable<Module[]> {
    return this.http.get<Module[]>(this.URLBase);
  }
  public getById(id: number): Observable<Module> {
    return this.http.get<Module>(`${this.URLBase}/${id}`)
  }


  public createModule(module: ModuleCreate) {
    return this.http.post(this.URLBase, module);
  }

  public update(id: number, module: ModuleCreate) {
    return this.http.put(`${this.URLBase}/${id}`, module)

  }
  public delete(id: number): Observable<any> {
    return this.http.delete(`${this.URLBase}/${id}`);
  }

  public getAllDelete():Observable<Module[]>{
    return this.http.get<Module[]>(`${this.URLBase}/getDelete`)
  }

  public logicalDelete(id: number): Observable<any> {
    return this.http.patch(`${this.URLBase}/logical-delete/${id}`, {});
  }

  public logicalRestore(id: number): Observable<any> {
    return this.http.patch(`${this.URLBase}/logical-restore/${id}`, {});
  }

  constructor() { }
}
