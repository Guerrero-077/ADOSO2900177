import { Component, inject } from '@angular/core';
import { PostFormComponent } from "../post-form/post-form.component";
import { PostService } from '../../../Services/Posts/post.service';
import { PostCreate } from '../../../Models/posts/post.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-create',
  imports: [PostFormComponent],
  templateUrl: './post-create.component.html',
  styleUrl: './post-create.component.css'
})
export class PostCreateComponent {
  private albumService = inject(PostService);
  private router = inject(Router);

  Save(form: PostCreate) {
    this.albumService.create(form).subscribe(() => {
      this.router.navigate(['/user']);
    })
  }
}
