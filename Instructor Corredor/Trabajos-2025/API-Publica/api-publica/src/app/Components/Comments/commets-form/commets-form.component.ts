import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { commentsCreate } from '../../../Models/Comments/comments.models';

@Component({
  selector: 'app-commets-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterLink
  ],
  templateUrl: './commets-form.component.html',
  styleUrls: ['./commets-form.component.css']
})
export class CommetsFormComponent implements OnInit {
  formBuilder = inject(FormBuilder);

  @Input() title!: string;
  @Input() models?: commentsCreate;

  @Output()
  onSubmit = new EventEmitter<commentsCreate>();

  ngOnInit(): void {
    if (this.models !== undefined) {
      this.form.patchValue(this.models);
    }
  }

  form = this.formBuilder.group({
    name: ['', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(50),
      Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/)
    ]],
    email: ['', [
      Validators.required,
      Validators.email,
      Validators.maxLength(100)
    ]],
    body: ['', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(500)
    ]]
  });

  get nameControl() { return this.form.controls.name; }
  get emailControl() { return this.form.controls.email; }
  get bodyControl() { return this.form.controls.body; }

  Save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    let comment = this.form.value as commentsCreate;
    this.onSubmit.emit(comment);
  }
}