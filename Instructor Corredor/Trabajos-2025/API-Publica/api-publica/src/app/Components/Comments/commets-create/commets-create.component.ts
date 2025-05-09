import { Component, inject } from '@angular/core';
import { CommetsFormComponent } from "../commets-form/commets-form.component";
import { CommetsService } from '../../../Services/Comments/commets.service';
import { commentsCreate } from '../../../Models/Comments/comments.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-commets-create',
  imports: [CommetsFormComponent],
  templateUrl: './commets-create.component.html',
  styleUrl: './commets-create.component.css'
})
export class CommetsCreateComponent {

  private commetsService = inject(CommetsService);
  private router = inject(Router);

  Save(data: commentsCreate) {
    this.commetsService.create(data).subscribe(() => {
      this.router.navigate(['/commets']);
    })
  }
}
