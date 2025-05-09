import { Component, inject, Input, numberAttribute, OnInit } from '@angular/core';
import { RolFormPermissionService } from '../../../Services/rolFormPermission/rol-form-permission.service';
import { Router } from '@angular/router';
import { RolFormPermission, RolFormPermissionCreate } from '../../../Models/rolFormPermission/rolFormPermission.models';
import { FormRolFormPermissionComponent } from "../form-rol-form-permission/form-rol-form-permission.component";

@Component({
  selector: 'app-edit-rol-form-permission',
  imports: [FormRolFormPermissionComponent],
  templateUrl: './edit-rol-form-permission.component.html',
  styleUrl: './edit-rol-form-permission.component.css'
})
export class EditRolFormPermissionComponent implements OnInit {

  @Input({ transform: numberAttribute })
  id!: number;

  rolFormPermissionServices = inject(RolFormPermissionService);
  router = inject(Router);

  model?: RolFormPermission;

  ngOnInit(): void {
    this.rolFormPermissionServices.getById(this.id).subscribe(form => {
      this.model = form;
    })
  }

  save(form: RolFormPermissionCreate) {
    this.rolFormPermissionServices.update(this.id, form).subscribe(() => {
      console.log(this.id, form)
      this.router.navigate(['/rolFormPermission'])
    })
  }
}
