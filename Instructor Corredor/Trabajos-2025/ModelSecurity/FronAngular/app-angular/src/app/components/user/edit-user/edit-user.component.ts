import { Component, inject, Input, numberAttribute, OnInit } from '@angular/core';
import { FormUserComponent } from "../form-user/form-user.component";
import { UserService } from '../../../Services/user/user.service';
import { Router } from '@angular/router';
import { User, UserCreate } from '../../../Models/user/user.models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-user',
  imports: [FormUserComponent,CommonModule],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css'
})
export class EditUserComponent implements OnInit {

  @Input({ transform: numberAttribute })
  id!: number;

  userService = inject(UserService);
  router = inject(Router);

  model?: User;

  ngOnInit(): void {
    this.userService.getById(this.id).subscribe(user =>{this.model = user});
  }

  save(user: UserCreate){
    this.userService.update(this.id, user).subscribe(() => this.router.navigate(['/user']));
  }
}
