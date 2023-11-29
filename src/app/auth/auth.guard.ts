import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable, tap } from 'rxjs';

import { AppState } from '../reducers';
import { isLoggedIn } from './auth.selectors';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard {
  constructor(private router: Router, private store: Store<AppState>) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Boolean> {
    return this.store.pipe(
      select(isLoggedIn),
      tap((loggedIn) => {
        if (!loggedIn) {
          this.router.navigateByUrl('/login');
        }
      })
    );
  }
}
