import { AfterViewInit, Component, inject, ViewChild } from '@angular/core';
import { PostList } from '../../../Models/posts/post.models';
import { PostService } from '../../../Services/Posts/post.service';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-post',
  imports: [MatTableModule, MatPaginatorModule, MatButtonModule, RouterLink],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements AfterViewInit {
  albumService = inject(PostService);
  // models!: AlbumsList[];

  // Define las columnas que se mostrarán en la tabla
  displayedColumns: string[] = ['id', 'title', 'body', 'actions'];

  dataSource: MatTableDataSource<PostList> = new MatTableDataSource<PostList>();

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
