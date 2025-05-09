import { Component, OnInit, inject, Input, Output, EventEmitter } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { AlbumsCreate } from "../../../Models/albums/albums.models";
import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-albums-form',
  imports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    RouterLink,
    CommonModule
  ],
  templateUrl: './albums-form.component.html',
  styleUrl: './albums-form.component.css'
})
export class AlbumsFormComponent implements OnInit {
  formBuilder = inject(FormBuilder);

  @Input() title!: string;
  @Input() models?: AlbumsCreate;

  @Output()
  posteoForm = new EventEmitter<AlbumsCreate>();

  ngOnInit(): void {
    if (this.models !== undefined) {
      this.form.patchValue(this.models)
    }
  }

  form = this.formBuilder.group({
    title: ['', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50),
      Validators.pattern(/^[a-zA-Z0-9\sáéíóúÁÉÍÓÚñÑ]+$/)
    ]]
  })

  get titleControl() {
    return this.form.controls.title;
  }

  Save() {
    if (this.form.invalid) {
      // Marcar todos los controles como touched para mostrar errores
      this.form.markAllAsTouched();
      return;
    }

    let user = this.form.value as AlbumsCreate;
    this.posteoForm.emit(user);
  }
}