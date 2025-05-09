import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { FormModuleService } from '../../../Services/formModule/form-module.service';
import { FormModuleEntity } from '../../../Models/formModule/formModule.models';

@Component({
  selector: 'app-list-form-module',
  imports: [MatButtonModule, RouterLink, MatTableModule],
  templateUrl: './list-form-module.component.html',
  styleUrl: './list-form-module.component.css'
})
export class ListFormModuleComponent {
  formModuleServices = inject(FormModuleService);
  formModules?: FormModuleEntity[];
  columns = ['form_name', 'module_name', 'action']

  constructor() {
    this.getAll();
  }

  public getAll() {
    this.formModuleServices.getAllFormModule().subscribe(formModules => {
      this.formModules = formModules;
    });
  }

  deleteLogic(id: number) {
    this.formModuleServices.logicalDelete(id).subscribe(() => {
      console.log("Se elimino Logicamnete")
      this.getAll();
    })
  }
}
