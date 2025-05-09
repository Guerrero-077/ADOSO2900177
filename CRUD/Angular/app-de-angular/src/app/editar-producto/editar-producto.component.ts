import { Component, inject, Input, numberAttribute, OnInit } from '@angular/core';
import { LaptopService } from '../laptop.service';
import { Laptop, LaptopCreacion } from '../laptop.modules';
import { FormularioProductoComponent } from '../formulario-producto/formulario-producto.component';
import { Router } from '@angular/router';
import { LoandingComponent } from "../compartidos/componentes/loanding/loanding.component";
import { extraerErrores } from '../compartidos/componentes/funciones/extreaerErrores';
import { MostrarErroresComponent } from "../compartidos/componentes/mostrar-errores/mostrar-errores.component";

@Component({
  selector: 'app-editar-producto',
  imports: [FormularioProductoComponent, LoandingComponent, MostrarErroresComponent],
  templateUrl: './editar-producto.component.html',
  styleUrl: './editar-producto.component.css'
})
export class EditarProductoComponent implements OnInit {

  @Input({transform: numberAttribute})
  id!: number;

  laptopService = inject(LaptopService);
  router = inject(Router);
  modelo?: Laptop;
  errores: string[] = [];

  ngOnInit(): void {
    this.laptopService.obtenerPorId(this.id).subscribe(laptop => {
      this.modelo = laptop;
    });
  }

  guardarCambios(laptop : LaptopCreacion){
    this.laptopService.actualizar(this.id, laptop).subscribe({
      next:() => {
      this.router.navigate(['/productos']);
    },
    error: err =>{
      const errores = extraerErrores(err);
      this.errores = errores;
    }
  })
  }
}
