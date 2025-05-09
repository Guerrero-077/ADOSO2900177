import { Component, inject } from '@angular/core';
import { RolUserService } from '../../../Services/RolUser/rol-user.service';
import { RolUser } from '../../../Models/RolUser/rolUser.models';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-list-rol-user',
  imports: [MatTableModule, MatButtonModule,CommonModule],
  templateUrl: './list-rol-user.component.html',
  styleUrl: './list-rol-user.component.css'
})
export class ListRolUserComponent {
  constructor() {
    this.loadRolUser();

  }

  rolUserService = inject(RolUserService);
  rolUser: RolUser[] = [];


  loadRolUser() {
    this.rolUserService.getAll().subscribe((data) => {
      this.rolUser = data;
      console.log(this.rolUser);
    })
  }
  displayedColumns: string[] = ['username', 'rolname'];

}
