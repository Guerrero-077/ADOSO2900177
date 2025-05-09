import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from '../../../Services/Login/login.service';
import { User } from '../../../Models/User/user.models';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatSnackBarModule,
    RouterLink
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor() { }

  private loginService = inject(LoginService);
  private router = inject(Router);
  public formBuilder = inject(FormBuilder)
  hidePassword = true;


  public formRegister: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required]
  });
  
  Register() {
    if (this.formRegister.invalid) return;

    const objeto: User = {
      name: this.formRegister.value.name,
      email: this.formRegister.value.email,
      password: this.formRegister.value.password
    }

    this.loginService.register(objeto).subscribe({
      next: (data) => {
        if (data.isSuccess) {
          this.router.navigate([""])
          Swal.fire({
            icon: "success",
            title: "Oops...",
            text: "User Create!",
          })
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Error create User!",
          })
        }
      }, error(err) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.message,
        })
      }
    })
  }


}
