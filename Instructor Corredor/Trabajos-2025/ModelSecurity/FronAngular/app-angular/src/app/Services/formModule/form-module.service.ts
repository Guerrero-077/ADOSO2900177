import { inject, Injectable } from '@angular/core';
import { FormModuleCreate, FormModuleEntity } from '../../Models/formModule/formModule.models';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FormModuleService {
  private http = inject(HttpClient)
  private URLBase = environment.apiUrl + '/formModule';

  // constructor() { } public getAllRolFormPermission(): Observable<RolFormPermission[]> {
  //     return this.http.get<RolFormPermission[]>(this.URLBase);
  //   }

  public getAllFormModule(): Observable<FormModuleEntity[]> {
    return this.http.get<FormModuleEntity[]>(this.URLBase);
  }
  public getById(id: number): Observable<FormModuleEntity> {
    return this.http.get<FormModuleEntity>(`${this.URLBase}/${id}`)
  }

  public create(form: FormModuleCreate) {
    return this.http.post(this.URLBase, form);
  }

  public update(id: number, form: FormModuleCreate) {
    return this.http.put(`${this.URLBase}/${id}`, form)

  }
  public delete(id: number): Observable<any> {
    return this.http.delete(`${this.URLBase}/${id}`);
  }

  public logicalDelete(id: number, ): Observable<any> {
    return this.http.patch(`${this.URLBase}/logical-delete/${id}`, {});
  }

  public logicalRestore(id: number): Observable<any> {
    return this.http.patch(`${this.URLBase}/logical-restore/${id}`, {});
  }
  constructor() { }
}
