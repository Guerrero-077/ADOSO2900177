import { Injectable } from '@angular/core';
import { CrudService } from '../CrudGeneric/crud.service';
import { commentsCreate, commentsList } from '../../Models/Comments/comments.models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommetsService extends CrudService<commentsCreate, commentsList> {

  constructor(http: HttpClient) {
    super(http, 'comments')
  }
}
