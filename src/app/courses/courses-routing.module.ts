import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { CoursesResolver } from './services/courses.resolver';

export const coursesRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: {
      Courses: CoursesResolver,
    },
  },
  {
    path: ':courseUrl',
    component: CourseComponent,
    resolve: {
      courses: CoursesResolver,
    },
  },
];
@NgModule({
  imports: [RouterModule.forChild(coursesRoutes)],
  exports: [RouterModule],
})
export class CourseRoutingModule {}
