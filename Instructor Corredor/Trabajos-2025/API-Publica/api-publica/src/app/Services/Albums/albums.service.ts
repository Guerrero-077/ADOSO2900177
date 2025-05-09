import { Injectable } from '@angular/core';
import { CrudService } from '../CrudGeneric/crud.service';
import { AlbumsCreate, AlbumsList } from '../../Models/albums/albums.models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService extends CrudService<AlbumsCreate, AlbumsList> {

  constructor(http: HttpClient) {
    super(http, 'albums')
  }
}
