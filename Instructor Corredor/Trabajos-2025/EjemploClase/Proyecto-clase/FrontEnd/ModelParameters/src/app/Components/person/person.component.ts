import { Component, inject, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { PersonService } from '../../Services/person.service';
import { PersonModels } from '../../Modelos/person.models';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-person',
  imports: [MatTableModule, MatButtonModule, RouterLink,CommonModule],
  templateUrl: './person.component.html',
  styleUrl: './person.component.css'
})
export class PersonComponent implements OnInit {
  model !: PersonModels[];
  // "id": 2,
  // "firstName": "fernanfloo",
  // "lastName": "string",
  // "documentType": "CC ",
  // "email": "string",
  // "phone": "string",
  // "cityId": 1,
  // "cityName": null

  displayedColumns: string[] = ['No', 'name', 'documentType', 'email','actions'];


  servicesPerson = inject(PersonService);

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.servicesPerson.GetAll().subscribe({
      next: (data) => {
        this.model = data;
        console.log(this.model)
      }
    });
  }







}
