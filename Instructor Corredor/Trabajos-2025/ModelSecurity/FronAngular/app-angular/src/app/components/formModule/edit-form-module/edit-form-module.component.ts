import { Component, inject, Input, numberAttribute } from '@angular/core';
import { FormFormModuleComponent } from "../form-form-module/form-form-module.component";
import { Router } from '@angular/router';
import { RolFormPermission, RolFormPermissionCreate } from '../../../Models/rolFormPermission/rolFormPermission.models';
import { RolFormPermissionService } from '../../../Services/rolFormPermission/rol-form-permission.service';
import { FormModuleCreate, FormModuleEntity } from '../../../Models/formModule/formModule.models';
import { FormModuleService } from '../../../Services/formModule/form-module.service';

@Component({
  selector: 'app-edit-form-module',
  imports: [FormFormModuleComponent],
  templateUrl: './edit-form-module.component.html',
  styleUrl: './edit-form-module.component.css'
})
export class EditFormModuleComponent {

  @Input({ transform: numberAttribute })
  id!: number;

  formModuleService = inject(FormModuleService);
  router = inject(Router);

  model?: FormModuleEntity;

  ngOnInit(): void {
    this.formModuleService.getById(this.id).subscribe(form => {
      this.model = form;
    })
  }

  save(form: FormModuleCreate) {
    this.formModuleService.update(this.id, form).subscribe(() => {
      console.log(this.id, form)
      this.router.navigate(['/rolFormPermission'])
    })
  }
}
