import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { FormCreate, FormModel } from '../../Models/form/form.models';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  private http = inject(HttpClient)
  private URLBase = environment.apiUrl + '/form';

  public getAll(): Observable<FormModel[]> {
    return this.http.get<FormModel[]>(this.URLBase);
  }

  public getAllDelete(): Observable<FormModel[]> {
    return this.http.get<FormModel[]>(`${this.URLBase}/getDelete`);
  }

  public getById(id: number): Observable<FormModel> {
    return this.http.get<FormModel>(`${this.URLBase}/${id}`)
  }

  public create(form: FormCreate) {
    return this.http.post(this.URLBase, form);
  }

  public update(id: number, form: FormCreate) {
    return this.http.put(`${this.URLBase}`, form)

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
