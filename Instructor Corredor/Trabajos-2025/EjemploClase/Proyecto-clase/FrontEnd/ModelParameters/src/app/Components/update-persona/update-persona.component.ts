import { Component, inject, Input, numberAttribute, OnInit } from '@angular/core';
import { PersonService } from '../../Services/person.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonCreate, PersonModels } from '../../Modelos/person.models';
import { FormularioComponent } from '../formulario/formulario.component';

@Component({
  selector: 'app-update-persona',
  imports: [FormularioComponent],
  templateUrl: './update-persona.component.html',
  styleUrl: './update-persona.component.css'
})
export class UpdatePersonaComponent implements OnInit {


  @Input({ transform: numberAttribute })
  id!: number;

  private readonly servicio = inject(PersonService);
  private readonly router = inject(Router);


  modelo?: PersonCreate;


  ngOnInit(): void {
    // console.log(this.id)
    // if (this.modelo) {
    this.servicio.GetById(this.id).subscribe({
      next: (data) => {
        this.modelo = data;

      }
    })
    // }
  }

  GuardarCambios(entidad: PersonCreate): void {
    if (this.modelo) {
      entidad.id = this.modelo.id;

    }

    this.servicio.Update(entidad).subscribe(() => {
      this.router.navigate(['person']);
    })
  }



}
