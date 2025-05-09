import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../../../Services/login/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatSnackBarModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private formBuilder = inject(FormBuilder);
  private loginService = inject(AuthService);
  private snackBar = inject(MatSnackBar);
  private router = inject(Router);

  hidePassword = true;

  form = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  login() {
    if (this.form.valid) {
      const credentials = this.form.value as { username: string; password: string };

      this.loginService.login(credentials).subscribe({
        next: (response) => {
          localStorage.setItem('token', response.token);
          localStorage.setItem('userName', response.userName);
          localStorage.setItem('role', response.role);
          localStorage.setItem('userId', response.userId.toString());

          this.snackBar.open('Inicio de sesión exitoso', 'Cerrar', { duration: 3000 });
          this.router.navigate(['/user']); // ajusta la ruta si es necesario
        },
        error: () => {
          this.snackBar.open('Usuario o contraseña incorrectos', 'Cerrar', { duration: 3000 });
        }
      });
    }
  }

}