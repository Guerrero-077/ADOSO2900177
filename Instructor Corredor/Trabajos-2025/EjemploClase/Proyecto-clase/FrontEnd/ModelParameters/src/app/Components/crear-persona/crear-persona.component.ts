import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { PersonService } from '../../Services/person.service';
import { PersonCreate } from '../../Modelos/person.models';
import { FormularioComponent } from '../formulario/formulario.component';

@Component({
  selector: 'app-crear-persona',
  imports: [FormularioComponent],
  templateUrl: './crear-persona.component.html',
  styleUrl: './crear-persona.component.css'
})
export class CrearPersonaComponent {
  router = inject(Router);
  servicio = inject(PersonService);

  GuardarCambios(persona: PersonCreate) {
      this.servicio.Create(persona).subscribe(()=>{
        alert("Persona creada")
        this.router.navigate(['person'])
      })


  }



}
