import { Injectable } from '@angular/core';
import { PersonCreate, PersonModels } from '../Modelos/person.models';
import { GenericService } from './generic/generic.service';

@Injectable({
  providedIn: 'root'
})
export class PersonService extends GenericService<PersonModels, PersonCreate> {
  constructor() {
    super('person');
  }
}
