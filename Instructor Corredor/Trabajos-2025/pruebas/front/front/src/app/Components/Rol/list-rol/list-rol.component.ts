import { Component, inject, OnInit } from '@angular/core';
import { RolService } from '../../../Services/Rol/rol.service';
import { Rol, RolCreate } from '../../../Models/Rol/rol.models';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-list-rol',
  imports: [
    CommonModule,
    FormsModule,               // ✅ <-- este es el que falta
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './list-rol.component.html',
  styleUrl: './list-rol.component.css'
})
export class ListRolComponent implements OnInit {
  private rolService = inject(RolService);
  rols: Rol[] = [];

  newRole: RolCreate = {
    name: '',
    description: ''
  };

  ngOnInit(): void {
    this.getAllRoles();
  }

  getAllRoles(): void {
    this.rolService.getAll().subscribe({
      next: (data) => this.rols = data,
      error: (err) => console.error('Error al obtener roles', err)
    });
  }

  createRole(): void {
    this.rolService.create(this.newRole).subscribe({
      next: () => {
        this.newRole = { name: '', description: '' }; // reset form
        this.getAllRoles(); // refresh list
      },
      error: (err) => console.error('Error al crear rol', err)
    });
  }

}
