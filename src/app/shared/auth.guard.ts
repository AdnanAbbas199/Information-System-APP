import { CanActivateFn, Router } from '@angular/router';
import {inject} from '@angular/core';
import { AuthService } from './auth.service';

import { map, take } from 'rxjs';



export const authGuard: CanActivateFn = (route, state) => {
  debugger;
  const router = inject(Router);
  const service = inject(AuthService);
  
  return service.isLoggedIn.pipe(
    take(1),
    map((isLoggedIn: boolean) => {
      if (!isLoggedIn) {
        router.navigate(['']);
        return false;
      }
      return true;
    })
  );
};
