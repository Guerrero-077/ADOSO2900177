import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  if (req.url.indexOf("Login") > 0) return next(req);

  const token = localStorage.getItem("token");
  const clonReques = req.clone({
    setHeaders:{
      Authorization: `Bearer ${token}`
    }
  })
  return next(clonReques);
};
