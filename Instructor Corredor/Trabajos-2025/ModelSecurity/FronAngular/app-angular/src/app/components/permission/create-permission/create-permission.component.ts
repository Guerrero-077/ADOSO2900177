import { Component, inject } from '@angular/core';
import { FormPermissionComponent } from "../form-permission/form-permission.component";
import { PermissionService } from '../../../Services/permission/permission.service';
import { PermissionCreate } from '../../../Models/permission/permission.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-permission',
  imports: [FormPermissionComponent],
  templateUrl: './create-permission.component.html',
  styleUrl: './create-permission.component.css'
})
export class CreatePermissionComponent {
  private permissionService = inject(PermissionService);
  private router = inject(Router)

  gurdarCambios(form: PermissionCreate){
    this.permissionService.createForm(form).subscribe(() =>{
      this.router.navigate(['permission']);
    });
  }
}
