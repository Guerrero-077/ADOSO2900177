import { Injectable } from '@angular/core';
import { GenericService } from '../generic/generic-service.service';
import { RolUser, RolUserCreate } from '../../Models/RolUser/rolUser.models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RolUserService extends GenericService<RolUser, RolUserCreate>{

  constructor(http: HttpClient) {
    super(http, 'rolUser');
  }
}
