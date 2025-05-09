import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Person, PersonCreate } from '../../Models/Person/Person.models';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private http = inject(HttpClient);
  private URLBase = environment.apiUrl + '/person';
  private token = localStorage.getItem('token'); // <-- O de donde lo tengas guardado


  public getAllPersons(): Observable<Person[]> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
    return this.http.get<Person[]>(this.URLBase, { headers });
  }

  public getById(id: number): Observable<Person> {
    return this.http.get<Person>(`${this.URLBase}/${id}`)
  }

  public createForm(form: PersonCreate) {
    return this.http.post(this.URLBase, form);
  }

  public update(id: number, form: PersonCreate) {
    return this.http.put(`${this.URLBase}/${id}`, form)

  }
  public delete(id: number): Observable<any> {
    return this.http.delete(`${this.URLBase}/${id}`);
  }


  public gelAllDelete(): Observable<Person[]>{
    return this.http.get<Person[]>(`${this.URLBase}/getDelete`);
  }
  public logicalDelete(id: number): Observable<any> {
    return this.http.patch(`${this.URLBase}/logical-delete/${id}`, {});
  }

  public logicalRestore(id: number): Observable<any> {
    return this.http.patch(`${this.URLBase}/logical-restore/${id}`, {});
  }

  constructor() { }
}
