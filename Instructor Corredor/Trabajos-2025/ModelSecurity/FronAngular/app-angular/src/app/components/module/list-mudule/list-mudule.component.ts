import { Component, inject } from '@angular/core';
import { Module } from '../../../Models/module/module.models';
import { ModuleService } from '../../../Services/module/module.service';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-mudule',
  imports: [MatButtonModule, RouterLink, MatTableModule, CommonModule],
  templateUrl: './list-mudule.component.html',
  styleUrl: './list-mudule.component.css'
})
export class ListMuduleComponent {
  moduleServices = inject(ModuleService);
  modules?: Module[];
  columns = ['name', 'description', 'action']

  isAdmin: boolean = false;

  role = localStorage.getItem("role");

  constructor() {
    this.isAdmin = this.role === "Admin";
    this.getAll();

  }
  public getAll() {
    this.moduleServices.getAllModule().subscribe(modules => {
      this.modules = modules;
    });
  }

  public DeleteLogical(id: number) {
    this.moduleServices.logicalDelete(id).subscribe(() => {
      console.log("Eliminado Logicamente");
      this.getAll();

    })
  }
}
