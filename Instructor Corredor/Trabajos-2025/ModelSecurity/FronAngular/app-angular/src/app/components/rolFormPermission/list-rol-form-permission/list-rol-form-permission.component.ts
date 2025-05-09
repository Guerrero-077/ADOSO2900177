import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { RolFormPermissionService } from '../../../Services/rolFormPermission/rol-form-permission.service';
import { RolFormPermission } from '../../../Models/rolFormPermission/rolFormPermission.models';

@Component({
  selector: 'app-list-rol-form-permission',
  imports: [MatButtonModule, RouterLink, MatTableModule],
  templateUrl: './list-rol-form-permission.component.html',
  styleUrl: './list-rol-form-permission.component.css'
})
export class ListRolFormPermissionComponent {
  rolFormPermissionService = inject(RolFormPermissionService);
  rolFormPermissions?: RolFormPermission[];
  columns = ['rol_name', 'form_name', 'permission_name', 'action']

  constructor() {
    this.getAll();
  }

  public getAll() {
    this.rolFormPermissionService.getAllRolFormPermission().subscribe(rolFormPermissions => {
      this.rolFormPermissions = rolFormPermissions;
    });
  }

  public DeleteLogical(id: number) {
    this.rolFormPermissionService.logicalDelete(id).subscribe(() => {
      console.log("Eliminado Logicamente");
      this.getAll();
    })
  }
}
