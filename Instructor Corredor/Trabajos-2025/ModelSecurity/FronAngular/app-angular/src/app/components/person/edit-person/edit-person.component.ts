import { Component, inject, Input, numberAttribute, OnInit } from '@angular/core';
import { PersonService } from '../../../Services/Person/person.service';
import { Person, PersonCreate } from '../../../Models/Person/Person.models';
import { Router } from '@angular/router';
import { FormPersonComponent } from "../form-person/form-person.component";

@Component({
  selector: 'app-edit-person',
  imports: [FormPersonComponent],
  templateUrl: './edit-person.component.html',
  styleUrl: './edit-person.component.css'
})
export class EditPersonComponent implements OnInit{
  @Input({ transform: numberAttribute })
  id!: number;

  personServices = inject(PersonService);
  router = inject(Router);

  model?: Person;

  ngOnInit(): void {
    this.personServices.getById(this.id).subscribe(person => {
      this.model = person;
    })
  }

  save(person: PersonCreate) {
    this.personServices.update(this.id, person).subscribe(() => {
      console.log(this.id, person)
      this.router.navigate(['person'])
    })
  }
}
