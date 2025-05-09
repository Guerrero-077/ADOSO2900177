import { Component, inject } from '@angular/core';
import { FormRolUserComponent } from "../form-rol-user/form-rol-user.component";
import { RolUserService } from '../../../Services/rolUser/rol-user.service';
import { RolUserCreate } from '../../../Models/rolUser/rolUser.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-rol-user',
  imports: [FormRolUserComponent],
  templateUrl: './create-rol-user.component.html',
  styleUrl: './create-rol-user.component.css'
})
export class CreateRolUserComponent {
  private rolUserServices = inject(RolUserService);
  private router = inject(Router);

  save(rolFormPermission: RolUserCreate) {
    this.rolUserServices.create(rolFormPermission).subscribe(() => {
      this.router.navigate(['rolUser'])
    })
  }
}
