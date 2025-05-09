import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { FieldConfig } from '../../../Models/Form/form.models';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MsgService } from '../../../Services/MsgErrors/msg.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink, MatButtonModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnChanges {
  @Input() fields: FieldConfig[] = [];
  @Input() initialData: any = null; // Datos iniciales para edición
  @Input() submitButtonText: string = 'Guardar';
  @Input() cancelButtonText: string = 'Cancelar';
  @Input() showCancelButton: boolean = true;

  @Output() submitForm = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<void>();

  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private msgService: MsgService
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['fields'] && this.fields.length > 0) {
      this.createForm();

      // Si hay datos iniciales, llenamos el formulario
      if (this.initialData) {
        this.patchFormValues();
      }
    }

    // Si cambian los datos iniciales, actualizamos el formulario
    if (changes['initialData'] && this.form && this.initialData) {
      this.patchFormValues();
    }
  }

  private createForm(): void {
    const group: Record<string, any> = {};

    this.fields.forEach(field => {
      const validators = this.mapValidators(field.validations || []);
      // Usamos el valor inicial de initialData si existe, sino el de field.value
      const initialValue = this.initialData?.[field.name] ?? field.value ?? null;
      group[field.name] = [initialValue, validators];
    });

    this.form = this.fb.group(group);
  }

  private patchFormValues(): void {
    const formData: any = {};

    // Solo asignamos valores para campos que existen en el formulario
    Object.keys(this.form.controls).forEach(key => {
      if (this.initialData.hasOwnProperty(key)) {
        formData[key] = this.initialData[key];
      }
    });

    this.form.patchValue(formData);
  }

  private mapValidators(validations: any[]): Validators[] {
    return validations.map(validation => {
      switch (validation.name) {
        case 'required': return Validators.required;
        case 'requiredTrue': return Validators.requiredTrue;
        case 'minLength': return Validators.minLength(validation.value);
        case 'maxLength': return Validators.maxLength(validation.value);
        case 'min': return Validators.min(validation.value);
        case 'max': return Validators.max(validation.value);
        case 'email': return Validators.email;
        case 'pattern': return Validators.pattern(validation.pattern);
        default: return null;
      }
    }).filter(validator => validator !== null) as Validators[];
  }

  getErrorMessage(fieldName: string): string {
    const control = this.form.get(fieldName);
    if (!control?.errors || !control.touched) return '';

    const [errorType] = Object.keys(control.errors);
    return this.msgService.getMessage(errorType, control.errors[errorType]);
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.submitForm.emit(this.form.value);
    } else {
      this.markFormGroupTouched(this.form);
    }
  }

  onCancel(): void {
    this.cancel.emit();
  }

  private markFormGroupTouched(formGroup: FormGroup): void {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}