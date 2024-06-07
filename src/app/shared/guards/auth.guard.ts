import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { TokenService } from '../services/Token.service';
import { map, tap } from 'rxjs/operators';

export const authGuard: CanActivateFn = (route, state) => {
  const tokenService = inject(TokenService);
  const router = inject(Router);
  return tokenService.isAuthenticatedUser().pipe(
    tap(isAuthenticated => {
      if (!isAuthenticated) {
        router.navigate(['/error']);
      }
    }),
    map(isAuthenticated => isAuthenticated)
  );
};
