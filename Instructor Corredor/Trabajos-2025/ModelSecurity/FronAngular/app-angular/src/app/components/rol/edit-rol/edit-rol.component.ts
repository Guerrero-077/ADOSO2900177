import { Component, EventEmitter, inject, Input, numberAttribute, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Rol, RolCreate } from '../../../Models/Rol/Rol.models';
import { FormRolComponent } from "../form-rol/form-rol.component";
import { Router } from '@angular/router';
import { RolService } from '../../../Services/Rol/rol.service';

@Component({
  selector: 'app-edit-rol',
  imports: [FormRolComponent],
  templateUrl: './edit-rol.component.html',
  styleUrl: './edit-rol.component.css'
})
export class EditRolComponent implements OnInit {

  rolServices = inject(RolService)
  router = inject(Router);

  @Input({transform: numberAttribute})
  id!: number;


  model?: Rol;

  @Output()
  posteoForm = new EventEmitter<RolCreate>();

  ngOnInit(): void {
    this.rolServices.getById(this.id).subscribe(rol => {
      this.model = rol;
    })
  }

  save(rol: RolCreate){
    this.rolServices.update(this.id, rol).subscribe(()=>{
      this.router.navigate(['/rol'])
    })
  }
}
