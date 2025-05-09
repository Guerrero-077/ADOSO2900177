import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { Permission, PermissionCreate } from '../../../Models/permission/permission.models';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-permission',
  imports: [MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatButtonModule, RouterLink, MatIconModule, CommonModule],
  templateUrl: './form-permission.component.html',
  styleUrl: './form-permission.component.css'
})
export class FormPermissionComponent implements OnInit {
  private readonly formBuilder = inject(FormBuilder);

  @Input({ required: true })
  title!: string;

  @Input()
  model?: Permission;

  @Output()
  posteoForm = new EventEmitter<PermissionCreate>()

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
    let form = this.form.value as PermissionCreate;
    this.posteoForm.emit(form)

  }
}
