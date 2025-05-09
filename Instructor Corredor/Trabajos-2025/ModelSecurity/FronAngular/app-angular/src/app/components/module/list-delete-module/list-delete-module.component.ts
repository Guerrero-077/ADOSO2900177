import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { ModuleService } from '../../../Services/module/module.service';
import { Module } from '../../../Models/module/module.models';

@Component({
  selector: 'app-list-delete-module',
  imports: [MatTableModule, MatButtonModule, RouterLink, CommonModule],
  templateUrl: './list-delete-module.component.html',
  styleUrl: './list-delete-module.component.css'
})
export class ListDeleteModuleComponent{

  moduleService = inject(ModuleService);
  isAdmin: boolean = false;

  modules!: Module[];
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
    this.moduleService.getAllDelete().subscribe((data) => {
      this.modules = data;
    })
  }


  restore(id: number) {
    this.moduleService.logicalRestore(id).subscribe(() => {
      console.log("Se restauro");
      this.load();
    })
  }
}
