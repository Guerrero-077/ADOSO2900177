import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { PostCreate } from '../../../Models/posts/post.models';

@Component({
  selector: 'app-post-form',
  standalone: true,
  imports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    RouterLink,
    CommonModule
  ],
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.css'
})
export class PostFormComponent implements OnInit {
  formBuilder = inject(FormBuilder);

  @Input() title!: string;
  @Input() models?: PostCreate;

  @Output()
  posteoForm = new EventEmitter<PostCreate>();

  ngOnInit(): void {
    if (this.models !== undefined) {
      this.form.patchValue(this.models);
    }
  }

  form = this.formBuilder.group({
    title: ['', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(100),
      Validators.pattern(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\s.,!?\-]+$/)
    ]],
    body: ['', [
      Validators.required,
      Validators.minLength(20),
      Validators.maxLength(1000)
    ]]
  });

  get titleControl() { return this.form.controls.title; }
  get bodyControl() { return this.form.controls.body; }

  Save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    let post = this.form.value as PostCreate;
    this.posteoForm.emit(post);
  }
}