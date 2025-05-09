import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { PersonService } from '../../../Services/Person/person.service';
import { Person } from '../../../Models/Person/Person.models';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-person',
  imports: [MatButtonModule, RouterLink, MatTableModule, CommonModule],
  templateUrl: './list-person.component.html',
  styleUrl: './list-person.component.css'
})
export class ListPersonComponent {
  personService = inject(PersonService);
  persons?: Person[];
  columns = ['full_name', 'phone_number', 'active', 'action']

  isAdmin: boolean = false;

  role = localStorage.getItem("role");

  constructor() {
    this.isAdmin = this.role === "Admin";
    this.getAll();

  }
  public getAll() {
    this.personService.getAllPersons().subscribe(persons => {
      this.persons = persons;
    });
  }

  public DeleteLogical(id: number) {
    this.personService.logicalDelete(id).subscribe(() => {
      console.log("Eliminado logicamente");
      this.getAll();

    })
  }
}
