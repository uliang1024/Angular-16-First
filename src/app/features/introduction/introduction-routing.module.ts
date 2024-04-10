import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroductionComponent } from './introduction.component';

const routes: Routes = [
  { 
    path: '', 
    component: IntroductionComponent,
    children: [
      // Add more child routes as needed
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntroductionRoutingModule { }
