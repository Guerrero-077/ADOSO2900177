import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { User, UserCreate } from '../../Models/User/user.models';
import { GenericService } from '../generic/generic-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends GenericService<User, UserCreate>{

  constructor(http: HttpClient) {
    super(http, 'user');
  }

  // constructor() { }

  // private http = inject(HttpClient);
  // private URLBase = environment.apiUrl + '/user';

  // public getAllUser(): Observable<User[]> {
  //   return this.http.get<User[]>(this.URLBase);
  // }

}
