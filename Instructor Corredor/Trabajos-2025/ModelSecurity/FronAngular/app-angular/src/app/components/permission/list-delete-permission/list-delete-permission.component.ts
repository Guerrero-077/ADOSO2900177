import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { PermissionService } from '../../../Services/permission/permission.service';
import { Permission } from '../../../Models/permission/permission.models';

@Component({
  selector: 'app-list-delete-permission',
  imports: [MatTableModule, MatButtonModule, RouterLink, CommonModule],
  templateUrl: './list-delete-permission.component.html',
  styleUrl: './list-delete-permission.component.css'
})
export class ListDeletePermissionComponent {

  permissionService = inject(PermissionService);
  isAdmin: boolean = false;

  permissions!: Permission[];
  displayedColumns: string[] = [];


  role = localStorage.getItem("role");


  constructor() {
    this.isAdmin = this.role === "Admin"

    if (this.isAdmin) {
      this.displayedColumns.push("name", "description", "actions")
    }
    this.load();
  }

  load() {
    this.permissionService.getAllDelete().subscribe((data) => {
      this.permissions = data;
    })
  }


  restore(id: number) {
    this.permissionService.logicalRestore(id).subscribe(() => {
      console.log("Se restauro");
      this.load();
    })
  }
}
