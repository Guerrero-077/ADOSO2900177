import { CommonModule } from '@angular/common';
import { Component,  inject, Input, Output } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { PersonCreate } from '../../../Models/Person/Person.models';
import { FormPersonComponent } from "../form-person/form-person.component";
import { PersonService } from '../../../Services/Person/person.service';

@Component({
  selector: 'app-create-person',
  imports: [MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatButtonModule, CommonModule, FormPersonComponent],
  templateUrl: './create-person.component.html',
  styleUrl: './create-person.component.css'
})
export class CreatePersonComponent {
  private personServices = inject(PersonService);
  private router = inject(Router);

  gurdarCambios(form: PersonCreate) {
    this.personServices.createForm(form).subscribe(() => {
      this.router.navigate(['person']);
    });
  }

}
