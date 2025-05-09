import { Component, inject, Input, numberAttribute, OnInit } from '@angular/core';
import { FormRolUserComponent } from "../form-rol-user/form-rol-user.component";
import { RolUserService } from '../../../Services/rolUser/rol-user.service';
import { RolUser, RolUserCreate } from '../../../Models/rolUser/rolUser.models';
import { Router } from '@angular/router';
import { RolFormPermissionCreate } from '../../../Models/rolFormPermission/rolFormPermission.models';

@Component({
  selector: 'app-edit-rol-user',
  imports: [FormRolUserComponent],
  templateUrl: './edit-rol-user.component.html',
  styleUrl: './edit-rol-user.component.css'
})
export class EditRolUserComponent implements OnInit {
  @Input({ transform: numberAttribute })
  id!: number;

  rolUserServices = inject(RolUserService);
  router = inject(Router);

  model?: RolUser;

  ngOnInit(): void {
    this.rolUserServices.getById(this.id).subscribe(form => {
      this.model = form;
    })
  }

  save(form: RolUserCreate) {
    this.rolUserServices.update(this.id, form).subscribe(() => {
      console.log(this.id, form)
      this.router.navigate(['/rolUser'])
    })
  }
}
