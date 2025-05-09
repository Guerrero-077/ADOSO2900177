import { Component, inject } from '@angular/core';
import { FormUserComponent } from "../form-user/form-user.component";
import { UserService } from '../../../Services/user/user.service';
import { Router } from '@angular/router';
import { UserCreate } from '../../../Models/user/user.models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-user',
  imports: [CommonModule, FormUserComponent],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent {
  private userService = inject(UserService);
  private router = inject(Router)

  gurdarCambios(form: UserCreate) {
    this.userService.createForm(form).subscribe(() => {
      this.router.navigate(['user']);
    });
  }
}
