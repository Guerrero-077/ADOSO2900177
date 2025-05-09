import { HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { AuthService } from '../Services/login/auth.service';
import { inject } from '@angular/core';
import { EMPTY } from 'rxjs';

export const interceptorInterceptor:HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
  const authService = inject(AuthService);
  const token = authService.getToken();

  // // --- VERIFICACIÓN DE EXPIRACIÓN EN INTERCEPTOR ---
  // if (authService.isTokenExpired(token)) {
  //   // Si el token existe pero está expirado
  //   if (token) {

  //     authService.logout('Token expired'); // Pasa una razón
  //     // Detiene la petición HTTP actual retornando un Observable vacío
  //     return EMPTY;
  //   }
  // }
  // // --- FIN VERIFICACIÓN ---


  // Si el token existe Y NO está expirado (ya que pasamos el if anterior)
  if (token) {
    const clonedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
    return next(clonedReq); // Continúa con la petición modificada
  }

  // Si no hay token, continúa con la petición original
  return next(req);
};
