import { Component, inject, Input, numberAttribute, OnInit } from '@angular/core';
import { CommetsService } from '../../../Services/Comments/commets.service';
import { commentsCreate } from '../../../Models/Comments/comments.models';
import { Router } from '@angular/router';
import { CommetsFormComponent } from "../commets-form/commets-form.component";

@Component({
  selector: 'app-commets-edit',
  imports: [CommetsFormComponent],
  templateUrl: './commets-edit.component.html',
  styleUrl: './commets-edit.component.css'
})
export class CommetsEditComponent implements OnInit {
  @Input({ transform: numberAttribute })
  id!: number;

  commetServices = inject(CommetsService);
  router = inject(Router);

  model?: commentsCreate;

  ngOnInit(): void {
    this.commetServices.getById(this.id).subscribe(Users => {
      this.model = Users;
      console.log(this.model);
    })
  }

  Update(Users: commentsCreate) {
    this.commetServices.update(this.id, Users).subscribe(() => {
      console.log(this.id, Users)
      this.router.navigate(['user'])
    })
  }
}
