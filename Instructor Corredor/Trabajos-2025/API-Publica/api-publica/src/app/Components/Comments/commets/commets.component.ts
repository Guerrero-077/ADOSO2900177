import { Component, OnInit, ViewChild, AfterViewInit, inject } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CommetsService } from '../../../Services/Comments/commets.service';
import { commentsCreate } from '../../../Models/Comments/comments.models';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-commets',
  imports: [MatTableModule, MatPaginatorModule, MatButtonModule, RouterLink],
  templateUrl: './commets.component.html',
  styleUrl: './commets.component.css'
})
export class CommetsComponent implements AfterViewInit {
  commentService = inject(CommetsService);
  // Define las columnas que se mostrarán en la tabla
  displayedColumns: string[] = ['id', 'name', 'email', 'body', 'actions'];
  // Crea la fuente de datos para la tabla
  dataSource: MatTableDataSource<commentsCreate> = new MatTableDataSource<commentsCreate>();

  // Referencia al paginador que se encontrará en la plantilla
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() {
    this.GetAll();
  }

  ngAfterViewInit(): void {
    // Asigna el paginador a la fuente de datos después de que la vista ha sido inicializada
    this.dataSource.paginator = this.paginator;
  }

  GetAll(): void {
    this.commentService.getAll().subscribe((data) => {
      this.dataSource.data = data;
      console.log(data);
    });
  }

  Delete(id: number) {
    this.commentService.delete(id).subscribe(() => {
      alert('Eliminado Correctamente')
      this.GetAll();
    })
  }
}
