import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, OnInit, Output, model } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormBuilder } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RouterLink } from '@angular/router';
import { RolUserService } from '../../../Services/rolUser/rol-user.service';
import { UserService } from '../../../Services/user/user.service';
import { Rol } from '../../../Models/Rol/Rol.models';
import { User } from '../../../Models/user/user.models';
import { RolUser, RolUserCreate } from '../../../Models/rolUser/rolUser.models';
import { RolService } from '../../../Services/Rol/rol.service';

@Component({
  selector: 'app-form-rol-user',
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
    RouterLink
  ],
  templateUrl: './form-rol-user.component.html',
  styleUrl: './form-rol-user.component.css'
})
export class FormRolUserComponent implements OnInit {

  private formBuilder = inject(FormBuilder);
  private rolService = inject(RolService);
  private userService = inject(UserService);

  rols?: Rol[];
  users?: User[];

  @Input({ required: true })
  title!: string;

  @Input()
  model?: RolUserCreate;

  @Output()
  posteoForm = new EventEmitter<RolUserCreate>()

  form = this.formBuilder.group({
    rolid: [0],
    userid: [0]
  })


  ngOnInit(): void {
    if (this.model !== undefined) {
      this.form.patchValue(this.model)
    }
  }

  constructor() {
    this.rolService.getAllRol().subscribe((data) => this.rols = data);
    this.userService.getAllUser().subscribe((data) => this.users = data);
  }

  public save() {
    let rolFormPermissions = this.form.value as RolUserCreate;
    this.posteoForm.emit(rolFormPermissions);
  }

}
