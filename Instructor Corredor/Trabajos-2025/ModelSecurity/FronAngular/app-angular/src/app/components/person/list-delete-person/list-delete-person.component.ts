import { Component, inject, OnInit } from '@angular/core';
import { Person } from '../../../Models/Person/Person.models';
import { PersonService } from '../../../Services/Person/person.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-delete-person',
  imports: [MatTableModule, MatButtonModule, RouterLink, CommonModule],
  templateUrl: './list-delete-person.component.html',
  styleUrl: './list-delete-person.component.css'
})
export class ListDeletePersonComponent implements OnInit {

  personService = inject(PersonService);
  isAdmin: boolean = false;
  persons!: Person[];
  displayedColumns: string[] = [];

  role = localStorage.getItem('role');

  ngOnInit(): void {
    this.isAdmin = this.role === "Admin";

    if (this.isAdmin) {
      this.displayedColumns.push('full_name', 'phone_number',  'actions');
    }
    this.getAllDeletes();
  }

  public getAllDeletes() {
    this.personService.gelAllDelete().subscribe((data) => {
      this.persons = data;
      console.log(this.persons);
      
    })
  }

  restore(id: number) {
    this.personService.logicalRestore(id).subscribe(() => {
      console.log("Se restauro");
      this.getAllDeletes();
      
    })
  }
}
