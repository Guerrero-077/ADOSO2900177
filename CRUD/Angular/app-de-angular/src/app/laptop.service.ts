import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Laptop, LaptopCreacion } from './laptop.modules';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LaptopService {

  constructor() { }
  private http = inject(HttpClient)
  private URLBase = environment.apiURL + '/api/laptops';

  public obtenerTodo(): Observable<Laptop[]> {
    return this.http.get<Laptop[]>(this.URLBase);
  }

  public obtenerPorId(id: number): Observable<Laptop> {
    return this.http.get<Laptop>(this.URLBase + '/' + id);
  }

  public existePorNombre(nombre: string, id: string): Observable<boolean> {
    let params = new HttpParams();
    params = params.append('id', id);
    return this.http.get<boolean>(`${this.URLBase}/${nombre}/existe`, {params});
  }

  public crear(laptop: LaptopCreacion) {
    return this.http.post(this.URLBase, laptop);
  }

  public actualizar(id: number, laptop: LaptopCreacion) {
    return this.http.put(this.URLBase + '/' + id, laptop);
  }

  public borrar(id: number) {
    return this.http.delete(this.URLBase + '/' + id);
  }
}
