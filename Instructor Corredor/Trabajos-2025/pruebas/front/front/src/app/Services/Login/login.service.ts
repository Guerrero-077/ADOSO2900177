import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { User } from '../../Models/User/user.models';
import { Observable } from 'rxjs';
import { Login, ResponseLogin } from '../../Models/Login/login.models';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private http = inject(HttpClient);
  private URLBase = environment.apiUrl + '/Login';
  constructor() { }

  register(Objeto:User): Observable<ResponseLogin>{
    return this.http.post<ResponseLogin>(this.URLBase + '/Registrarse', Objeto);
  }

  login(Objeto:Login): Observable<ResponseLogin>{
    return this.http.post<ResponseLogin>(this.URLBase, Objeto);
  }

  validateToken(token:string):Observable<ResponseLogin>{
    return this.http.get<ResponseLogin>(`${this.URLBase}/ValidarToken?token=${token}`);
  }

  loginGoogle(tokenid:string){
    return this.http.post<{token:string}>('https://localhost:7286/api/Login/google',{tokenid})
  }
}
