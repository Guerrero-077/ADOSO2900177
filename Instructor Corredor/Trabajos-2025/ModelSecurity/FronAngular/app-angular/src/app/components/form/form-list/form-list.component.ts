import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { FormService } from '../../../Services/form/form.service';
import { FormModel } from '../../../Models/form/form.models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-list',
  imports: [MatButtonModule, RouterLink, MatTableModule, CommonModule],
  templateUrl: './form-list.component.html',
  styleUrl: './form-list.component.css'
})
export class FormListComponent {

  formServices = inject(FormService);
  forms?: FormModel[];
  columns = ['name', 'description', 'action']

  isAdmin: boolean = false;

  role = localStorage.getItem("role");

  constructor() {
    this.isAdmin = this.role === "Admin";
    this.getAll();

  }

  public getAll() {
    this.formServices.getAll().subscribe(forms => {
      this.forms = forms;
    });
  }

  deleteLogic(id: number) {
    this.formServices.logicalDelete(id).subscribe(() => {
      console.log("Se elimino Logicamnete")
      this.getAll();
    })
  }
}
