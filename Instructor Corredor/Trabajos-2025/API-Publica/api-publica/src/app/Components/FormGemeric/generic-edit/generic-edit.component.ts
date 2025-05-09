import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FieldConfig } from '../../../Models/Form/form.models';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-generic-edit',
  templateUrl: './generic-edit.component.html',
  styleUrls: ['./generic-edit.component.css']
})
export class GenericEditComponent implements OnInit {
  @Input() service: any; // Servicio inyectado desde el componente padre
  @Input() fieldsConfig: FieldConfig[] = []; // Configuración de campos
  @Input() redirectRoute: string = ''; // Ruta para redirección después de editar

  initialData: any = null;
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id && this.service) {
      this.loadData(id);
    }
  }

  private loadData(id: string): void {
    this.isLoading = true;
    this.service.getById(id).subscribe({
      next: (data: any) => {
        this.initialData = data;
        this.isLoading = false;
      },
      error: (err: any) => {
        console.error('Error loading data:', err);
        this.snackBar.open('Error al cargar los datos', 'Cerrar', { duration: 3000 });
        this.isLoading = false;
        this.router.navigate([this.redirectRoute]);
      }
    });
  }

  onUpdate(formData: any): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) return;

    this.service.update(id, formData).subscribe({
      next: () => {
        this.snackBar.open('Registro actualizado correctamente', 'Cerrar', { duration: 3000 });
        this.router.navigate([this.redirectRoute]);
      },
      error: (err: any) => {
        console.error('Error updating:', err);
        this.snackBar.open('Error al actualizar el registro', 'Cerrar', { duration: 3000 });
      }
    });
  }

  onCancel(): void {
    this.router.navigate([this.redirectRoute]);
  }
}