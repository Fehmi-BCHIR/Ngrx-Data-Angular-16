import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthActions } from './action-types';
import { tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  login$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.login),
        tap((action) =>
          localStorage.setItem('user', JSON.stringify(action.user))
        )
      ),
    { dispatch: false } //you might create an infinite loop if you dont add dispatch false here
  );

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.logout),
        tap((action) => {
          localStorage.removeItem('user');
          this.router.navigateByUrl('/login');
        })
      ),
    { dispatch: false }
  );

  constructor(private router: Router, private actions$: Actions) {}
}
