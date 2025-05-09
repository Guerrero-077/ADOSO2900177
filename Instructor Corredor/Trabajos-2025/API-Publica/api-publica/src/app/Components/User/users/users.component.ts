import { AfterViewInit, Component, inject, ViewChild } from '@angular/core';
import { UsersService } from '../../../Services/User/users.service';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { UsersCreate } from '../../../Models/Users/user.models';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-users',
  imports: [MatTableModule, MatPaginatorModule, MatButtonModule, RouterLink],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements AfterViewInit {
  userService = inject(UsersService);

  // models!: UsersCreate[];
  displayedColumns: string[] = ['position', 'name', 'userName', 'phone', 'website', 'acctions'];

  dataSource: MatTableDataSource<UsersCreate> = new MatTableDataSource<UsersCreate>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() {
    this.GetAllUser();
  }

  ngAfterViewInit(): void {
    // Asigna el paginador a la fuente de datos después de que la vista ha sido inicializada
    this.dataSource.paginator = this.paginator;
  }

  GetAllUser() {
    this.userService.getAll().subscribe(data => {
      this.dataSource.data = data;
      // console.log(this.models);
    })
  }

  Delete(id: number) {
    this.userService.delete(id).subscribe(() => {
      alert('Eliminado Correctamente')
      this.GetAllUser();
    })
  }
}
