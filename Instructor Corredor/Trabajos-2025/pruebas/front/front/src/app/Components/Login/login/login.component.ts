import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { LoginService } from '../../../Services/Login/login.service';
import { Login } from '../../../Models/Login/login.models';

declare const google: any;

@Component({
  selector: 'app-login',
  imports: [CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatSnackBarModule,
    RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {


  private loginService = inject(LoginService);
  private router = inject(Router);

  public formBuild = inject(FormBuilder);

  hidePassword = true;

  public formLogin: FormGroup = this.formBuild.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  Login() {
    if (this.formLogin.invalid) return;

    const objeto: Login = {
      email: this.formLogin.value.email,
      password: this.formLogin.value.password
    }

    this.loginService.login(objeto).subscribe({
      next: (data) => {
        if (data.isSuccess) {
          localStorage.setItem('token', data.token);
          this.router.navigate(['user']);
          Swal.fire({
            icon: "success",
            title: "Exit...",
            text: "Exitoso",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Credenciales incorrectas",


          });
        }
      },
      error: (error) => {
        console.log(error.message);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Credenciales incorrectas",
        });
      }
    })
  }

  ngOnInit(): void {
    const checkGoogleLoaded = () => {
      const googleElement = document.getElementById("google-button");

      if ((window as any).google && google.accounts && google.accounts.id && googleElement) {
        google.accounts.id.initialize({
          client_id: '436268030419-5q7o4a4lv3ahg2p12iad63ubptlka6pu.apps.googleusercontent.com',
          callback: this.handleCredentialResponse.bind(this)
        });

        google.accounts.id.renderButton(
          googleElement,
          { theme: "outline", size: "large" }
        );
      } else {
        setTimeout(checkGoogleLoaded, 100);
      }
    };

    // ✅ Esto estaba faltando fuera de la definición:
    checkGoogleLoaded();
  }


  handleCredentialResponse(response: any) {
    const tokenId = response.credential;
    this.loginService.loginGoogle(tokenId).subscribe({
      next: (data) => {
        localStorage.setItem('token', data.token);
        Swal.fire({
          icon: 'success',
          title: 'inicia de sesion con google',
          text: 'Bienvenido con google',
          timer: 2000,
          showConfirmButton: false
        });
        this.router.navigate(['user'])
      },
      error: error => {
        console.error('Error con login de google', error)
      }
    })
  }

}
