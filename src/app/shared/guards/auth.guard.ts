import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { TokenService } from '../services/Token.service';

export const authGuard: CanActivateFn = (route, state) => {
  const tokenService = inject(TokenService);
  const router = inject(Router);
  if (tokenService.isAuthenticatedUser()) {
    return true;
  } else {
    router.navigate(['/error']);
    return false;
  }
};
