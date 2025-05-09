import { Component, inject } from '@angular/core';
import { UserFormComponent } from "../user-form/user-form.component";
import { UsersService } from '../../../Services/User/users.service';
import { Router } from '@angular/router';
import { UsersCreate } from '../../../Models/Users/user.models';

@Component({
  selector: 'app-user-create',
  imports: [UserFormComponent],
  templateUrl: './user-create.component.html',
  styleUrl: './user-create.component.css'
})
export class UserCreateComponent {

  private userService = inject(UsersService);
  private router = inject(Router);

  Save(form: UsersCreate) {
    this.userService.create(form).subscribe(() => {
      this.router.navigate(['/user']);
    })
  }
}
