import { Component, inject } from '@angular/core';
import { FormRolComponent } from "../form-rol/form-rol.component";
import { RolService } from '../../../Services/Rol/rol.service';
import { Router } from '@angular/router';
import { RolCreate } from '../../../Models/Rol/Rol.models';

@Component({
  selector: 'app-create-rol',
  imports: [FormRolComponent],
  templateUrl: './create-rol.component.html',
  styleUrl: './create-rol.component.css'
})
export class CreateRolComponent {

  private rolServices = inject(RolService);
  private router = inject(Router);

  save(rol: RolCreate) {
    this.rolServices.createRol(rol).subscribe(() => {
      this.router.navigate(['rol']);
    })
  }
}
