import { Component, inject, Input, numberAttribute, OnInit } from '@angular/core';
import { FormPermissionComponent } from "../form-permission/form-permission.component";
import { PermissionService } from '../../../Services/permission/permission.service';
import { Permission, PermissionCreate } from '../../../Models/permission/permission.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-permission',
  imports: [FormPermissionComponent],
  templateUrl: './edit-permission.component.html',
  styleUrl: './edit-permission.component.css'
})
export class EditPermissionComponent implements OnInit {
  @Input({ transform: numberAttribute })
  id!: number;

  permissionServices = inject(PermissionService);
  router = inject(Router);

  model?: Permission;

  ngOnInit(): void {
    this.permissionServices.getById(this.id).subscribe(form => {
      this.model = form;
      console.log(this.model)
    })
  }

  save(form: PermissionCreate) {
    this.permissionServices.update(this.id, form).subscribe(() => {
      this.router.navigate(['/permission'])
    })
  }
}
