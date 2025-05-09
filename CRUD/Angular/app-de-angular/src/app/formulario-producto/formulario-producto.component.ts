import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { Laptop, LaptopCreacion } from '../laptop.modules';
import { nombreLaptop } from '../compartidos/componentes/funciones/validarNombre';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-formulario-producto',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, RouterLink, MatProgressSpinnerModule],
  templateUrl: './formulario-producto.component.html',
  styleUrl: './formulario-producto.component.css'
})
export class FormularioProductoComponent implements OnInit {

  private readonly formBuilder = inject(FormBuilder);

  @Input({ required: true })
  titulo!: string;

  @Input()
  modelo?: Laptop; // Opcional

  @Output()
  posteoFormulario = new EventEmitter<LaptopCreacion>();

  form = this.formBuilder.group({
    nombre: ['', {
      validators: [Validators.required],
      asyncValidators: [nombreLaptop()],
      updateOn: 'blur'//solo se ejecuta cuando el usuario deje de realizar la accion
    }]
  });

  obtenerErroresCampoNombre(): string {
    let nombre = this.form.controls.nombre;

    if (nombre.hasError('required')) {
      return 'El campo nombre es requerido';
    }
    if (nombre.hasError('mensaje')) {
      return nombre.getError('mensaje');
    }
    return '';
  }

  ngOnInit(): void {
    if (this.modelo !== undefined) {
      this.form.patchValue(this.modelo);
    }
  }

  guardarCambios() {
    const laptop = this.form.value as LaptopCreacion;
    this.posteoFormulario.emit(laptop);
  }
}