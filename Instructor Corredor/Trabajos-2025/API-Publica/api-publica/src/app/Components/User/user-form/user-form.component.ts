import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { UsersCreate } from '../../../Models/Users/user.models';

@Component({
  selector: 'app-user-form',
  imports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    RouterLink,
    CommonModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent implements OnInit {
  formBuilder = inject(FormBuilder);

  @Input() title!: string;
  @Input() models?: UsersCreate;

  @Output()
  posteoForm = new EventEmitter<UsersCreate>();

  ngOnInit(): void {
    if (this.models !== undefined) {
      this.form.patchValue(this.models)
    }
  }

  form = this.formBuilder.group({
    name: ['', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50),
      Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/)
    ]],
    username: ['', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20),
      Validators.pattern(/^[a-zA-Z0-9_]+$/)
    ]],
    phone: ['', [
      Validators.required,
      Validators.pattern(/^[0-9()+-\s]+$/),
      Validators.minLength(7),
      Validators.maxLength(15)
    ]],
    website: ['', [
      Validators.pattern(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/)
    ]]
  })

  get nameControl() { return this.form.controls.name; }
  get usernameControl() { return this.form.controls.username; }
  get phoneControl() { return this.form.controls.phone; }
  get websiteControl() { return this.form.controls.website; }

  Save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    let user = this.form.value as UsersCreate;
    this.posteoForm.emit(user);
  }
}