import { Component, OnInit, inject, Input, Output, EventEmitter } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { RouterLink } from "@angular/router";
import { FormCreate, FormModel } from "../../../Models/form/form.models";
import { FormBuilder, ReactiveFormsModule } from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";
import { CommonModule } from "@angular/common";


@Component({
  selector: 'app-form-foms',
  imports: [MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatButtonModule, RouterLink, MatIconModule, CommonModule],
  templateUrl: './form-foms.component.html',
  styleUrl: './form-foms.component.css'
})
export class FormFomsComponent implements OnInit {

  private readonly formBuilder = inject(FormBuilder);

  @Input({ required: true })
  title!: string;

  @Input()
  model?: FormModel;

  @Output()
  posteoForm = new EventEmitter<FormCreate>()

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
    let form = this.form.value as FormCreate;
    this.posteoForm.emit(form)
  }
}
