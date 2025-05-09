import { Component, inject, Input, numberAttribute, OnInit } from '@angular/core';
import { PostService } from '../../../Services/Posts/post.service';
import { PostCreate } from '../../../Models/posts/post.models';
import { Router } from '@angular/router';
import { PostFormComponent } from "../post-form/post-form.component";

@Component({
  selector: 'app-post-edit',
  imports: [PostFormComponent],
  templateUrl: './post-edit.component.html',
  styleUrl: './post-edit.component.css'
})
export class PostEditComponent implements OnInit {
  @Input({ transform: numberAttribute })
  id!: number;

  albumServices = inject(PostService);
  router = inject(Router);

  model?: PostCreate;

  ngOnInit(): void {
    this.albumServices.getById(this.id).subscribe(Album => {
      this.model = Album;
      console.log(this.model);
    })
  }

  Update(Album: PostCreate) {
    this.albumServices.update(this.id, Album).subscribe(() => {
      console.log(this.id, Album)
      this.router.navigate(['user'])
    })
  }

}
