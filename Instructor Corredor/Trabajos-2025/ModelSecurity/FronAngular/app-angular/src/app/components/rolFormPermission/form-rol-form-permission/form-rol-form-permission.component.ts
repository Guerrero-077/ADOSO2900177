
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormBuilder } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormModel } from '../../../Models/form/form.models';
import { RolFormPermissionCreate } from '../../../Models/rolFormPermission/rolFormPermission.models';
import { FormService } from '../../../Services/form/form.service';
import { ModuleService } from '../../../Services/module/module.service';
import { Rol } from '../../../Models/Rol/Rol.models';
import { RolService } from '../../../Services/Rol/rol.service';
import { Permission } from '../../../Models/permission/permission.models';
import { PermissionService } from '../../../Services/permission/permission.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-form-rol-form-permission',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatIconModule,
    RouterLink],
  templateUrl: './form-rol-form-permission.component.html',
  styleUrl: './form-rol-form-permission.component.css'
})
export class FormRolFormPermissionComponent implements OnInit {

  private readonly formBuilder = inject(FormBuilder);
  private formService = inject(FormService)
  private rolService = inject(RolService)
  private permissionServices = inject(PermissionService);
  formModules?: FormModel[];
  rols?: Rol[];
  permissions?: Permission[];

  @Input({ required: true })
  title!: string;

  @Input()
  model?: RolFormPermissionCreate;

  @Output()
  posteoForm = new EventEmitter<RolFormPermissionCreate>();


  form = this.formBuilder.group({
    rolid: [0],
    formid: [0],
    active: [true],
    permissionid: [0],
  })


  ngOnInit(): void {
    if (this.model !== undefined) {
      this.form.patchValue(this.model)
    }
  }

  constructor() {
    this.rolService.getAllRol().subscribe((data) => this.rols = data);
    this.formService.getAll().subscribe((data) => this.formModules = data);
    this.permissionServices.getAllPermission().subscribe((data) => this.permissions = data)

  }

  public save() {
    let rolFormPermissions = this.form.value as RolFormPermissionCreate;
    this.posteoForm.emit(rolFormPermissions);
  }
}
