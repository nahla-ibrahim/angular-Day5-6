import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const userAuth = localStorage.getItem('auth');

  const isAuth = userAuth ? JSON.parse(userAuth).auth : false;

  if (isAuth) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
