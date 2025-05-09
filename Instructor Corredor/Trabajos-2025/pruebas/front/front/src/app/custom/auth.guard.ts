import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { catchError, map, of } from 'rxjs';
import { LoginService } from '../Services/Login/login.service';

export const authGuard: CanActivateFn = (route, state) => {

  const token = localStorage.getItem("token") || "";
  const router = inject(Router);
  const loginService = inject(LoginService);
  if (token !== '') {
    return loginService.validateToken(token).pipe(
      map(data => {
        if (data.isSuccess) {
          return true;
        } else {
          router.navigateByUrl('');
          return false;
        }
      }), catchError(error => {
        router.navigateByUrl('');
        return of(false);
      })
    )
    // return true;
  } else {
    router.navigateByUrl('');
    return false;
  }
};
