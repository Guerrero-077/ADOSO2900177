import { Component, inject } from '@angular/core';
import { FormRolFormPermissionComponent } from "../form-rol-form-permission/form-rol-form-permission.component";
import { RolFormPermissionService } from '../../../Services/rolFormPermission/rol-form-permission.service';
import { Router } from '@angular/router';
import { RolFormPermissionCreate } from '../../../Models/rolFormPermission/rolFormPermission.models';

@Component({
  selector: 'app-create-rol-form-permission',
  imports: [FormRolFormPermissionComponent],
  templateUrl: './create-rol-form-permission.component.html',
  styleUrl: './create-rol-form-permission.component.css'
})
export class CreateRolFormPermissionComponent {

  private rolFormPermissionServices = inject(RolFormPermissionService);
  private router = inject(Router);

  save(rolFormPermission: RolFormPermissionCreate) {
    this.rolFormPermissionServices.create(rolFormPermission).subscribe(() => {
      this.router.navigate(['rolFormPermission'])
    })
  }
}
