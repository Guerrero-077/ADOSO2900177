import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { Person, PersonCreate } from '../../../Models/Person/Person.models';

@Component({
  selector: 'app-form-person',
  imports: [MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatButtonModule, RouterLink, CommonModule],
  templateUrl: './form-person.component.html',
  styleUrl: './form-person.component.css'
})
export class FormPersonComponent implements OnInit {
  private formBuilder = inject(FormBuilder);

  @Input({ required: true })
  title!: string;

  @Input()
  modelo?: Person;

  @Output()
  posteoForm = new EventEmitter<PersonCreate>();

  ngOnInit(): void {
    if (this.modelo !== undefined) {
      this.form.patchValue(this.modelo);
    }
  }

  form = this.formBuilder.group({
    first_name: [''],
    last_name: [''],
    phone_number: [''],
    active: [true]
  })

  public gurdarCambios() {
    let persons = this.form.value as PersonCreate;
    this.posteoForm.emit(persons);
  }
}
