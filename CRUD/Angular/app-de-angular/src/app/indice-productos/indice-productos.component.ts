import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { LaptopService } from '../laptop.service';
import { Laptop } from '../laptop.modules';
import { MatTableModule } from '@angular/material/table';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';
import { LoandingComponent } from "../compartidos/componentes/loanding/loanding.component";

@Component({
  selector: 'app-indice-productos',
  imports: [MatButtonModule, RouterLink, MatTableModule, SweetAlert2Module, LoandingComponent],
  templateUrl: './indice-productos.component.html',
  styleUrl: './indice-productos.component.css'
})
export class IndiceProductosComponent {
  laptopService = inject(LaptopService);
  laptops?: Laptop[];
  columnasAMostrar = ['Nombre', 'Acciones']
  constructor() {
    this.cargarProductos()
  }

  cargarProductos() {
    this.laptopService.obtenerTodo().subscribe(laptops => {
      this.laptops = laptops;
    })
  }

  borrar(id: number) {
    this.laptopService.borrar(id).subscribe(() => {
      this.laptops = undefined;
      Swal.fire('Exitoso', 'El registro a sido borrado', 'success');
      this.cargarProductos()

    })
  }
}
