import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { Module, ModuleCreate } from '../../../Models/module/module.models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-module',
  imports: [MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatButtonModule, RouterLink, CommonModule],
  templateUrl: './form-module.component.html',
  styleUrl: './form-module.component.css'
})
export class FormModuleComponent implements OnInit{
  private readonly formBuilder = inject(FormBuilder);

  @Input({ required: true })
  title!: string;

  @Input()
  model?: Module;

  @Output()
  posteoForm = new EventEmitter<ModuleCreate>()

  ngOnInit(): void {
    if (this.model !== undefined) {
      this.form.patchValue(this.model)
    }
  }
  form = this.formBuilder.group({
    name: [''],
    active: [true],
    description: ['']
  })

  gurdarCambios() {
    let form = this.form.value as ModuleCreate;
    this.posteoForm.emit(form)

  }
}
