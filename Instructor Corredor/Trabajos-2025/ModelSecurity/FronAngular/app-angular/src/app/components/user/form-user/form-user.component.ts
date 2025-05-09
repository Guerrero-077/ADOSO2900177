import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { Permission } from '../../../Models/permission/permission.models';
import { User, UserCreate } from '../../../Models/user/user.models';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { PersonService } from '../../../Services/Person/person.service';
import { Person } from '../../../Models/Person/Person.models';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  selector: 'app-form-user',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    RouterLink,
    MatSelectModule,
    FormsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatIconModule],
  templateUrl: './form-user.component.html',
  styleUrl: './form-user.component.css'
})
export class FormUserComponent implements OnInit {
  private readonly formBuilder = inject(FormBuilder);
  private personServices = inject(PersonService);

  persons?: Person[];

  @Input({ required: true })
  title!: string;

  @Input()
  model?: UserCreate;

  @Output()
  posteoForm = new EventEmitter<UserCreate>()

  form = this.formBuilder.group({
    id: [0],
    user_name: [''],
    email: [''],
    password: [''],
    active: [true],
    person_id: [0]
  });



  ngOnInit(): void {
    console.log('Modelo recibido:', this.model);
    if (this.model !== undefined) {
      this.form.patchValue(this.model)
    }
  }
  constructor() {
    this.personServices.getAllPersons().subscribe((data) => this.persons = data);

  }
  public guardarCambios() {
    let users = this.form.value as UserCreate;
    this.posteoForm.emit(users);
  }



}
