import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './reducers';

export const selectAuthState = createFeatureSelector<AuthState>('auth');

/*a memoized function(it keeps memory of previous executions and only executes itself if the inputs of the function have not been calculated before)
 After each new execution of the function, the memoized function is going to keep in a memory cache specific to the function,the results of each calculation*/
// export const isLoggedIn = createSelector(
//   //as long as the input state object does not change, the output is not going to be recalculated
//   (state) => state['auth'],
//   (auth) => !!auth.user
// );
export const isLoggedIn = createSelector(
  selectAuthState,
  (auth) => !!auth.user
);

export const isLoggedOut = createSelector(isLoggedIn, (loggedIn) => !loggedIn);
