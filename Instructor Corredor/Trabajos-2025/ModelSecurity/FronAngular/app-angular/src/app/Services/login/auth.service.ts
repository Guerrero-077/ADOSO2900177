import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';


interface LoginRequest {
  username: string;
  password: string;
}

interface LoginResponse {
  token: string;
  userName: string;
  role: string;
  userId: number;
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  private http = inject(HttpClient);
  private URLbase = environment.apiUrl;

  login(credentials: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.URLbase}/Auth/login`, credentials);
  }
  // constructor(private http: HttpClient) { }

  // login(username: string, password: string): Observable<LoginResponse> {
  //   return this.http.post<LoginResponse>(this.loginUrl, { username, password });
  // }


  // saveToken(token: string) {
  //   localStorage.setItem('token', token);
  // }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  

  // logout() {
  //   localStorage.removeItem('token');N
  // }
}
