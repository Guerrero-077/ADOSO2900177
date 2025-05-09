import { Component, inject } from '@angular/core';
import { WeatherforecastService } from '../weatherforecast.service';

@Component({
  selector: 'app-landing',
  imports: [],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {
  weatherForecastService = inject(WeatherforecastService)
  climas: any[] = [];
  constructor() {
    this.weatherForecastService.obtenerClima().subscribe(datos => {
      this.climas = datos;
    }
    )
  }
}
