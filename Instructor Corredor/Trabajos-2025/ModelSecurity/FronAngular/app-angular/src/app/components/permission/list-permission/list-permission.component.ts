import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { Permission } from '../../../Models/permission/permission.models';
import { PermissionService } from '../../../Services/permission/permission.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-permission',
  imports: [MatButtonModule, RouterLink, MatTableModule, CommonModule],
  templateUrl: './list-permission.component.html',
  styleUrl: './list-permission.component.css'
})
export class ListPermissionComponent {
  permissionServices = inject(PermissionService);
  permissions?: Permission[];
  columns = ['name', 'description', 'action']

  isAdmin: boolean = false;

  role = localStorage.getItem("role");

  constructor() {
    this.isAdmin = this.role === "Admin";
    this.getAll();

  }

  public getAll() {
    this.permissionServices.getAllPermission().subscribe(permissions => {
      this.permissions = permissions;
    });
  }

  public DeleteLogical(id: number){
    this.permissionServices.logicalDelete(id).subscribe(()=>{
      console.log("Eliminado logicamente");
      this.getAll();
      
    })
  }
}
