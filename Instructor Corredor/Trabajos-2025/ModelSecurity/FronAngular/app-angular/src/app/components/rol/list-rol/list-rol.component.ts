import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { RolService } from '../../../Services/Rol/rol.service';
import { Rol } from '../../../Models/Rol/Rol.models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-rol',
  imports: [MatButtonModule, RouterLink, MatTableModule, CommonModule],
  templateUrl: './list-rol.component.html',
  styleUrl: './list-rol.component.css'
})
export class ListRolComponent {

  rolServices = inject(RolService);
  rols?: Rol[];
  columns = ['name', 'description', 'action']

  isAdmin: boolean = false;

  role = localStorage.getItem("role");

  constructor() {
    this.isAdmin = this.role === "Admin";
    this.getAll();

  }
  public getAll() {
    this.rolServices.getAllRol().subscribe(rols => {
      this.rols = rols;
    });
  }

  public DeleteLogical(id: number) {
    this.rolServices.logicalDelete(id).subscribe(() => {
      console.log("Eliminado Logicamente");
      this.getAll();

    })
  }
}
