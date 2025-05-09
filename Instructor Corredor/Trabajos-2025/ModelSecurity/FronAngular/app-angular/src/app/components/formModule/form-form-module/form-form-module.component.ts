import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { FormCreate, FormModel } from '../../../Models/form/form.models';
import { FormModuleCreate, FormModuleEntity } from '../../../Models/formModule/formModule.models';
import { FormService } from '../../../Services/form/form.service';
import { ModuleService } from '../../../Services/module/module.service';
import { Module } from '../../../Models/module/module.models';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-form-form-module',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatIconModule,
    RouterLink
  ],
  templateUrl: './form-form-module.component.html',
  styleUrl: './form-form-module.component.css'
})
export class FormFormModuleComponent {


  private readonly formBuilder = inject(FormBuilder);
  private formService = inject(FormService)
  private moduleService = inject(ModuleService)

  formModules?: FormModel[];
  modules?: Module[];

  @Input({ required: true })
  title!: string;

  @Input()
  model?: FormModuleCreate;

  @Output()
  posteoForm = new EventEmitter<FormModuleCreate>();


  form = this.formBuilder.group({
    formid: [0],
    moduleid: [0],
    active: [true],
  })


  ngOnInit(): void {
    if (this.model !== undefined) {
      this.form.patchValue(this.model)
    }
  }

  constructor() {
    this.formService.getAll().subscribe((data) => this.formModules = data);
    this.moduleService.getAllModule().subscribe((data) => this.modules = data);

  }

  public save() {
    let rolFormPermissions = this.form.value as FormModuleCreate;
    this.posteoForm.emit(rolFormPermissions);
  }
}
