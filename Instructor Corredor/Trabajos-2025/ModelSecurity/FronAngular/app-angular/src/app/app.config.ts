import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { interceptorInterceptor } from './core/interceptor.interceptor';


export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
  provideRouter(routes, withComponentInputBinding()),
  provideHttpClient(withFetch()), provideAnimationsAsync(),
  provideHttpClient(
    // Usa withInterceptors() para pasar un array de interceptores funcionales
    withInterceptors([
      interceptorInterceptor, // Registra tu interceptor funcional aquí
    ])
  ),
  ]
};
