import { AfterViewInit, Component, inject, ViewChild } from '@angular/core';
import { AlbumsService } from '../../../Services/Albums/albums.service';
import { AlbumsList } from '../../../Models/albums/albums.models';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-albums',
  imports: [MatTableModule, MatPaginatorModule, MatButtonModule, RouterLink],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements AfterViewInit {
  albumService = inject(AlbumsService);
  // models!: AlbumsList[];

  // Define las columnas que se mostrarán en la tabla
  displayedColumns: string[] = ['id', 'title', 'actions'];

  dataSource: MatTableDataSource<AlbumsList> = new MatTableDataSource<AlbumsList>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() {
    this.GetAll();
  }

  ngAfterViewInit(): void {
    // Asigna el paginador a la fuente de datos después de que la vista ha sido inicializada
    this.dataSource.paginator = this.paginator;
  }

  GetAll() {
    this.albumService.getAll().subscribe((data) => {
      this.dataSource.data = data;
      console.log(data);
    })
  }

  Delete(id: number) {
    this.albumService.delete(id).subscribe(() => {
      alert('Eliminado Correctamente')
      this.GetAll();
    })
  }
}
