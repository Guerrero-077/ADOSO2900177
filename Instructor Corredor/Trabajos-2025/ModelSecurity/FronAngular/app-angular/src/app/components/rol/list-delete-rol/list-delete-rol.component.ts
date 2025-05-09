import { Component, inject, OnInit } from '@angular/core';
import { RolService } from '../../../Services/Rol/rol.service';
import { Rol } from '../../../Models/Rol/Rol.models';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-delete-rol',
  imports: [MatTableModule, MatButtonModule, RouterLink, CommonModule],
  templateUrl: './list-delete-rol.component.html',
  styleUrl: './list-delete-rol.component.css'
})
export class ListDeleteRolComponent implements OnInit {
  rolService = inject(RolService);
  isAdmin: boolean = false;
  role = localStorage.getItem('role');
  rols!: Rol[];
  displayedColumns: string[] = [];

  ngOnInit(): void {
    this.isAdmin = this.role === "Admin"
    if (this.isAdmin) {
      this.displayedColumns.push('name', 'description', 'actions')
    }
    this.getAllDeletes();
  }

  public getAllDeletes() {
    this.rolService.getAllDelete().subscribe((data) => {
      this.rols = data;
    })
  }

  restore(id: number) {
    this.rolService.logicalRestore(id).subscribe(() => {
      console.log("Restaurado");
      this.getAllDeletes();
    })
  }
}
