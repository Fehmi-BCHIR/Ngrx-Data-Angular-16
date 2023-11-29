import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, filter, first, map, tap } from 'rxjs';
import { CourseEntityService } from './course-entity.service';

@Injectable()
export class CoursesResolver {
  constructor(private coursesService: CourseEntityService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Boolean> {
    return this.coursesService.loaded$.pipe(
      tap((loaded) => {
        if (!loaded) {
          this.coursesService.getAll();
        }
      }),
      filter((loaded) => !!loaded), //making sure that we wait for the data to be loaded in the store
      first() //completing the observable
    );
  }
}
