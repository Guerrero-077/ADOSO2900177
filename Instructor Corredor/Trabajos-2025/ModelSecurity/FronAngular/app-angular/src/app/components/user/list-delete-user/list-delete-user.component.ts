import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../../../Services/user/user.service';
import { User } from '../../../Models/user/user.models';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { PersonService } from '../../../Services/Person/person.service';
import { Person } from '../../../Models/Person/Person.models';

@Component({
  selector: 'app-list-delete-user',
  imports: [MatTableModule, MatButtonModule, RouterLink, CommonModule],
  templateUrl: './list-delete-user.component.html',
  styleUrl: './list-delete-user.component.css'
})
export class ListDeleteUserComponent implements OnInit {

  userService = inject(UserService);
  personService = inject(PersonService);

  isAdmin: boolean = false;

  users!: User[];
  persons!: Person[];
  columns: string[] = [];

  role = localStorage.getItem('role');

  ngOnInit(): void {
    this.isAdmin = this.role === "Admin";

    if (this.isAdmin) {
      this.columns.push('name', 'email', 'name_person', 'actions')
    }
    this.getAllDeletes();
  }

  getAllDeletes() {
    this.userService.getAllDeletes().subscribe((data) => {
      this.users = data;
      console.log(this.users);

    })
  }

  restore(id: number) {
    this.userService.logicalRestore(id).subscribe(() => {
      console.log("Restaurado");
      this.getAllDeletes();
    })
  }

}
