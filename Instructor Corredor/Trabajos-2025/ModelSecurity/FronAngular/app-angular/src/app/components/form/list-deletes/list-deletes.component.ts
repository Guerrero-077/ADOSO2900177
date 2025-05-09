import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { FormService } from '../../../Services/form/form.service';
import { FormModel } from '../../../Models/form/form.models';

@Component({
  selector: 'app-list-deletes',
  imports: [MatTableModule, MatButtonModule, RouterLink, CommonModule],
  templateUrl: './list-deletes.component.html',
  styleUrl: './list-deletes.component.css'
})
export class ListDeletesComponent {

  formService = inject(FormService);
  isAdmin: boolean = false;
  
  forms!: FormModel[];
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
    this.formService.getAllDelete().subscribe((data) => {
      this.forms = data;
    })
  }


  restore(id: number) {
    this.formService.logicalRestore(id).subscribe(() => {
      console.log("Se restauro");
      this.load();
    })
  }
}
