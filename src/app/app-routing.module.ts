  import { NgModule } from '@angular/core';
  import { RouterModule, Routes } from '@angular/router';

  export const routes: Routes = [
    { path: '', redirectTo: '/introduction', pathMatch: 'full' },
    { path: 'introduction', loadChildren: () => import('./features/introduction/introduction.module').then(m => m.IntroductionModule) },
    { path: 'courses', loadChildren: () => import('./features/courses/courses.module').then(m => m.CoursesModule) },
    { path: 'related', loadChildren: () => import('./features/related/related.module').then(m => m.RelatedModule) },
    { path: '**', redirectTo: '/introduction' }
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
