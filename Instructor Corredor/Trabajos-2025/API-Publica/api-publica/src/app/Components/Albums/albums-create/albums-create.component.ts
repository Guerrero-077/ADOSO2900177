import { Component, inject } from '@angular/core';
import { AlbumsFormComponent } from "../albums-form/albums-form.component";
import { AlbumsService } from '../../../Services/Albums/albums.service';
import { Router } from '@angular/router';
import { AlbumsCreate } from '../../../Models/albums/albums.models';

@Component({
  selector: 'app-albums-create',
  imports: [AlbumsFormComponent],
  templateUrl: './albums-create.component.html',
  styleUrl: './albums-create.component.css'
})
export class AlbumsCreateComponent {
  private albumService = inject(AlbumsService);
  private router = inject(Router);

  Save(data: AlbumsCreate) {
    this.albumService.create(data).subscribe(() => {
      this.router.navigate(['/user']);
    })
  }
}
