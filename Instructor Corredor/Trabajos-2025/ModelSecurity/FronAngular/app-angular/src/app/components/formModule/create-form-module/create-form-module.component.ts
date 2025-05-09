import { Component, inject } from '@angular/core';
import { FormModuleComponent } from "../../module/form-module/form-module.component";
import { FormService } from '../../../Services/form/form.service';
import { FormModuleCreate } from '../../../Models/formModule/formModule.models';
import { Router } from '@angular/router';
import { FormModuleService } from '../../../Services/formModule/form-module.service';
import { FormFormModuleComponent } from "../form-form-module/form-form-module.component";

@Component({
  selector: 'app-create-form-module',
  imports: [ FormFormModuleComponent],
  templateUrl: './create-form-module.component.html',
  styleUrl: './create-form-module.component.css'
})
export class CreateFormModuleComponent {

  private formModuleService = inject(FormModuleService);
  private router = inject(Router);

  save(formModule: FormModuleCreate) {
    this.formModuleService.create(formModule).subscribe(() => {
      this.router.navigate(['formModule'])
    })
  }
}
