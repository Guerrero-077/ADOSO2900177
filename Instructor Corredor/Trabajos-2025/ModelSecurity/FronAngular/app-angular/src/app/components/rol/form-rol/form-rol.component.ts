import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Rol, RolCreate } from '../../../Models/Rol/Rol.models';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-form-rol',
  imports: [MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatButtonModule, RouterLink, NgIf],
  templateUrl: './form-rol.component.html',
  styleUrl: './form-rol.component.css'
})
export class FormRolComponent implements OnInit {

  private readonly formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    name: [''],
    active: [true],
    description: ['']
  })

  @Input(({ required: true }))
  title!: string;

  @Input()
  model?: Rol;

  @Output()
  posteoForm = new EventEmitter<RolCreate>();

  ngOnInit(): void {
    if (this.model !== undefined) {
      this.form.patchValue(this.model);
    }
  }

  save() {
    let form = this.form.value as RolCreate;
    this.posteoForm.emit(form);
  }
}
