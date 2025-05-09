import { Component, inject, Input, numberAttribute, OnInit } from '@angular/core';
import { UserFormComponent } from "../user-form/user-form.component";
import { UsersService } from '../../../Services/User/users.service';
import { Router } from '@angular/router';
import { UsersCreate } from '../../../Models/Users/user.models';

@Component({
  selector: 'app-user-edit',
  imports: [UserFormComponent],
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.css'
})
export class UserEditComponent implements OnInit {
  @Input({ transform: numberAttribute })
  id!: number;

  userServices = inject(UsersService);
  router = inject(Router);

  model?: UsersCreate;

  ngOnInit(): void {
    this.userServices.getById(this.id).subscribe(Users => {
      this.model = Users;
      console.log(this.model);
    })
  }

  Update(Users: UsersCreate) {
    this.userServices.update(this.id, Users).subscribe(() => {
      console.log(this.id, Users)
      this.router.navigate(['user'])
    })
  }

}
