import { Injectable } from '@angular/core';
import { CrudService } from '../CrudGeneric/crud.service';
import { PostCreate, PostList } from '../../Models/posts/post.models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService extends CrudService<PostCreate, PostList> {

  constructor(http: HttpClient) {
    super(http, 'posts')
  }
}
