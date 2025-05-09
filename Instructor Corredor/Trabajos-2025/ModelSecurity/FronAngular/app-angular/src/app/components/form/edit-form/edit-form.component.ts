import { Component, inject, Input, numberAttribute, OnInit } from '@angular/core';
import { FormCreate, FormModel } from '../../../Models/form/form.models';
import { Router } from '@angular/router';
import { FormService } from '../../../Services/form/form.service';
import { FormFomsComponent } from '../form-foms/form-foms.component';




@Component({
  selector: 'app-edit-form',
  imports: [FormFomsComponent],
  templateUrl: './edit-form.component.html',
  styleUrl: './edit-form.component.css'
})
export class EditFormComponent implements OnInit {

  @Input({ transform: numberAttribute })
  id!: number;

  formServices = inject(FormService);
  router = inject(Router);

  model?: FormModel;

  ngOnInit(): void {
    this.formServices.getById(this.id).subscribe(form => {
      this.model = form;
      console.log(this.model)
    })
  }

  save(form: FormCreate) {
    this.formServices.update(this.id, form).subscribe(() => {
      console.log(this.id, form)
      this.router.navigate(['/form'])
    })
  }
}
