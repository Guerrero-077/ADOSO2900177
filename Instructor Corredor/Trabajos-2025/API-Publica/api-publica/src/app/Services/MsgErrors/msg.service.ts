import { Injectable } from '@angular/core';

type ErrorMessages = {
  required: string;
  email: string;
  minlength: (errors: any) => string;
  maxlength: (errors: any) => string;
  min: (errors: any) => string;
  max: (errors: any) => string;
  requiredTrue: string;
  pattern: string;
  default: string;
  [key: string]: string | ((errors: any) => string); // Firma de índice
};

@Injectable({
  providedIn: 'root'
})
export class MsgService {
  private messages: ErrorMessages = {
    required: 'Este campo es obligatorio',
    email: 'Ingresa un correo electrónico válido',
    minlength: (errors: any) => `Mínimo ${errors.requiredLength} caracteres`,
    maxlength: (errors: any) => `Máximo ${errors.requiredLength} caracteres`,
    min: (errors: any) => `El valor mínimo es ${errors.min}`,
    max: (errors: any) => `El valor máximo es ${errors.max}`,
    requiredTrue: 'Debes aceptar este campo',
    pattern: 'El formato no es válido',
    default: 'Valor inválido'
  };

  getMessage(errorName: string, errors?: any): string {
    const message = this.messages[errorName] || this.messages.default;
    return typeof message === 'function' ? message(errors) : message;
  }
}