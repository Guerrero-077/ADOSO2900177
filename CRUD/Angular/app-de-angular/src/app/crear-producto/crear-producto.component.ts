import { Component, inject, ɵUSE_RUNTIME_DEPS_TRACKER_FOR_JIT } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { LaptopService } from '../laptop.service';
import { LaptopCreacion } from '../laptop.modules';
import { FormularioProductoComponent } from "../formulario-producto/formulario-producto.component";
import { extraerErrores } from '../compartidos/componentes/funciones/extreaerErrores';
import { MostrarErroresComponent } from "../compartidos/componentes/mostrar-errores/mostrar-errores.component";

@Component({
  selector: 'app-crear-producto',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, FormularioProductoComponent, MostrarErroresComponent],
  templateUrl: './crear-producto.component.html',
  styleUrl: './crear-producto.component.css'
})
export class CrearProductoComponent {

  router = inject(Router);
  laptopService = inject(LaptopService)
  errores: string[] = [];

  guardarCambios(laptop: LaptopCreacion) {
    this.laptopService.crear(laptop).subscribe({
      next: () => {
        this.router.navigate(["productos"]);
      },
      error: err => {
        const errores = extraerErrores(err);
        this.errores = errores;
      }
    });
  }
}
