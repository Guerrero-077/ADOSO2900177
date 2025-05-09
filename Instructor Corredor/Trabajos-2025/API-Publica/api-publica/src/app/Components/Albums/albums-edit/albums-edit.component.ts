import { Component, inject, Input, numberAttribute, OnInit } from '@angular/core';
import { AlbumsService } from '../../../Services/Albums/albums.service';
import { AlbumsCreate } from '../../../Models/albums/albums.models';
import { Router } from '@angular/router';
import { AlbumsFormComponent } from "../albums-form/albums-form.component";

@Component({
  selector: 'app-albums-edit',
  imports: [AlbumsFormComponent],
  templateUrl: './albums-edit.component.html',
  styleUrl: './albums-edit.component.css'
})
export class AlbumsEditComponent implements OnInit {
  @Input({ transform: numberAttribute })
  id!: number;

  albumServices = inject(AlbumsService);
  router = inject(Router);

  model?: AlbumsCreate;

  ngOnInit(): void {
    this.albumServices.getById(this.id).subscribe(Album => {
      this.model = Album;
      console.log(this.model);
    })
  }

  Update(Album: AlbumsCreate) {
    this.albumServices.update(this.id, Album).subscribe(() => {
      console.log(this.id, Album)
      this.router.navigate(['user'])
    })
  }

}
