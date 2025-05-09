import { Component, inject, Input, numberAttribute, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Module, ModuleCreate } from '../../../Models/module/module.models';
import { ModuleService } from '../../../Services/module/module.service';
import { FormModuleComponent } from '../form-module/form-module.component';


@Component({
  selector: 'app-edit-module',
  imports: [FormModuleComponent],
  templateUrl: './edit-module.component.html',
  styleUrl: './edit-module.component.css'
})
export class EditModuleComponent implements OnInit {

  @Input({ transform: numberAttribute })
  id!: number;

  moduleServices = inject(ModuleService);
  router = inject(Router);

  model?: Module;

  ngOnInit(): void {
    this.moduleServices.getById(this.id).subscribe(moduel => {
      this.model = moduel;
    })
  }

  save(module: ModuleCreate) {
    this.moduleServices.update(this.id, module).subscribe(() => {
      console.log(this.id, module)
      this.router.navigate(['/module'])
    })
  }
}
