import { Component, inject, OnInit } from '@angular/core';
import { User } from '../../../Models/User/user.models';
import { UserService } from '../../../Services/User/user.service';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-user',
  imports: [MatButtonModule, MatTableModule, MatIconModule, CommonModule],
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.css'
})
export class ListUserComponent implements OnInit{

  userServices = inject(UserService);
  users?: User[];
  columns = ['name', 'email']

constructor() {}
  ngOnInit(): void {
    this.getAll();
    // throw new Error('Method not implemented.');
  }

  public getAll() {
    this.userServices.getAll().subscribe(users => {
      this.users = users;
    });
  }



}
