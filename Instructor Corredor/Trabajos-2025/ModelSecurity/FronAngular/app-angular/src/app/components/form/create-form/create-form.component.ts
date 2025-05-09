import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { FormService } from '../../../Services/form/form.service';
import { FormCreate } from '../../../Models/form/form.models';
import { FormFomsComponent } from "../form-foms/form-foms.component";

@Component({
  selector: 'app-create-form',
  imports: [FormFomsComponent],
  templateUrl: './create-form.component.html',
  styleUrl: './create-form.component.css'
})
export class CreateFormComponent {
  private formService = inject(FormService);
  private router = inject(Router)

  gurdarCambios(form: FormCreate) {
    this.formService.create(form).subscribe(() => {
      this.router.navigate(['form']);
    });
  }
}
