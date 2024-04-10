import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RelatedComponent } from './related.component';

const routes: Routes = [
  { 
    path: '', 
    component: RelatedComponent,
    children: [
      // Add more child routes as needed
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RelatedRoutingModule { }
