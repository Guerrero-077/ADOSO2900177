import { Component, inject, Input, numberAttribute, OnInit } from '@angular/core';
import { FormFomsComponent } from '../../form/form-foms/form-foms.component';
import { Router } from '@angular/router';
import { ModuleService } from '../../../Services/module/module.service';
import { Module, ModuleCreate } from '../../../Models/module/module.models';
import { FormModuleComponent } from "../form-module/form-module.component";

@Component({
  selector: 'app-create-mudule',
  imports: [FormModuleComponent],
  templateUrl: './create-mudule.component.html',
  styleUrl: './create-mudule.component.css'
})
export class CreateMuduleComponent  {
  private moduleService = inject(ModuleService);
  private router = inject(Router)

  gurdarCambios(module: ModuleCreate){
    this.moduleService.createModule(module).subscribe(() =>{
      this.router.navigate(['module']);
    });
  }
}
