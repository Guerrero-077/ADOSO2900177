import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { PersonService } from '../../Services/person.service';
import { PersonCreate } from '../../Modelos/person.models';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario',
  imports: [ ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, RouterLink,CommonModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent  implements OnInit{
  
  private form = inject(FormBuilder)
  private servicio = inject(PersonService)

  @Input() titulo!: string;
  @Input() modelo?: PersonCreate;
  @Output() posteoFormualrio = new EventEmitter<PersonCreate>

  FormPersona = this.form.group({
    firstName: [""],
    lastName: [""],
    documentType: ["CC"],
    email: [""],
    phone: [""],
    cityId: [1]

  })

  ngOnInit(): void {
    if(this.modelo !== undefined){
        this.FormPersona.patchValue(this.modelo);
    }
  }

  GuardarCambios(){
    let persona =  this.FormPersona.value as PersonCreate
    this.posteoFormualrio.emit(persona);
    console.log(persona)
  }



}
