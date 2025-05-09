import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { RolUser } from '../../../Models/rolUser/rolUser.models';
import { RolUserService } from '../../../Services/rolUser/rol-user.service';

@Component({
  selector: 'app-list-rol-user',
  imports: [MatButtonModule, RouterLink, MatTableModule],
  templateUrl: './list-rol-user.component.html',
  styleUrl: './list-rol-user.component.css'
})
export class ListRolUserComponent {
  rolUserServices = inject(RolUserService);
  rolUsers?: RolUser[];
  columns = ['userName', 'rolName', 'action']

  constructor() {
    this.getAll();
  }

  public getAll() {
    this.rolUserServices.getAllRolUser().subscribe(rolUsers => {
      this.rolUsers = rolUsers;
    });
  }

  public DeleteLogical(id: number){
    this.rolUserServices.logicalDelete(id).subscribe(()=>{
      console.log("Eliminado Correctamente");
      this.getAll();
      
    })
  }
}
